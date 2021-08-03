import React, {useState, useEffect} from 'react';
import {FlatList , ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import colors from '../../styles/colors';

import { 
  Container, 
  Header, 
  Title, 
  Quantidade, 
  ContainerLista, 
  ButtonIconLista, 
  InputTextLista 
} from './styles';

import  Card  from '../../components/Card';
import { Load } from '../../components/Load';
import { RouteProp, useRoute } from '@react-navigation/core';

export interface Character{
id: string;
name: string;
image: string;
species: string;
origin:{
  name:string,
  url:string,
};
};


export default function CharacterList(){

const [characters, setCharacters]= useState<Character[]>([]);
const [charactersCount, setCharactersCount]= useState(0);
const [search, setSearch] = useState('');

const [loading, setLoading] = useState(true);
const [page, setPage]= useState(1);
const [loadingMore, setLoadingMore] = useState(false);

function handleFetchMore(){
setLoadingMore(true);
setPage(oldValue=> oldValue+1);
fetchCharacters();
}
async function fetchSearchCharacters(){

const {data} = await api.get(`/character/?name=${search}`)
if(!data){
  return setLoading(true);
} 
setCharacters(data.results);
setCharactersCount(data.info.count);
setLoading(false);
}
async function fetchCharacters(){
  
const {data} = await api.get(`/character/?page=${page}`)
if(!data){
  return setLoading(true);
}
if(page>1){
  setCharacters(oldValue => [...oldValue, ...data.results]);
}else{
  setCharacters(data.results);
  setCharactersCount(data.info.count);
}
setLoading(false);
setLoadingMore(false);
}

//useEffect(() => {
//fetchCharacters();
//},[]);
useFocusEffect(//Conserta o fato de não atualizar o like na lista de characters porem deixa um pouco mais lento
React.useCallback(() => {
  setLoading(true)
  setCharacters([]);
  fetchCharacters();
},[])
);

if(loading){ 
  return <Load/>
}
  return(
<Container>
  <Header>
    <Title>Listagem</Title>
    <Quantidade>{charactersCount} Personagens</Quantidade>
  </Header>
  <View>
    <ContainerLista>
      <TouchableOpacity onPress={fetchSearchCharacters}>
        <ButtonIconLista name="search"/>
        </TouchableOpacity>
      <InputTextLista
        keyboardAppearance="light"
        placeholderTextColor="#959595"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Busque por um personagem"
        onSubmitEditing={fetchSearchCharacters}
        onChangeText={e=>setSearch(e)}
      />
    </ContainerLista>
  </View>
  {search!==''? 
    <FlatList
    data={characters}
    keyExtractor={Character => Character.id}
    renderItem={({item})=>(
      <Card item={item}/>
    )}
    showsVerticalScrollIndicator={false}
    />
  :
    <FlatList
      data={characters}
      keyExtractor={Character => Character.id}
      renderItem={({item})=>(
        <Card item={item}/>
      )}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      onEndReached={()=>handleFetchMore()}
      ListFooterComponent=
      {
        loadingMore ? <ActivityIndicator color={colors.blue_dark}/>:<></>
      }
    />
  }     
</Container>
  )
  }