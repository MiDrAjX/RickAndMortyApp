import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {FlatList , ActivityIndicator, View, Text, ImageSourcePropType, Image } from 'react-native';
import api from "../../services/api";
import { Load } from '../../components/Load';
import colors from '../../styles/colors';
import  Card  from '../../components/Card';

import {
  CardContainer,
  CardImage,
  CardInformation,
  CardTitle,
  CardSubTitle,
  CardText,
  CardButtonIcon,
} from '../../components/Card/styles';
import { Container, Header, Title, Quantidade } from './styles';
import { SearchField } from '../../components/SearchField';


 export interface Character{
  id: string;
  name: string;
  image: string;
  species: string;
  origin:{
    name:string,
    url:string
  }
  }


export default function CharacterList(){

  const [characters, setCharacters]= useState<Character[]>([]);
  const [charactersCount, setCharactersCount]= useState(0);
  const [loading, setLoading] = useState(true);

  const [page, setPage]= useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false)

  

  function handleFetchMore(){
    setLoadingMore(true);
    setPage(oldValue=> oldValue+1);
    
    fetchCharacters();
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


 useEffect(() => {
  fetchCharacters()
  },[])
 

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
      <SearchField/>
    </View>

    
    <FlatList
      data={characters}
      keyExtractor={Character => Character.id}
      renderItem={({item})=>(
        <Card item={item}/>
      )}
      showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={()=>handleFetchMore()}
          ListFooterComponent={
              loadingMore ? <ActivityIndicator color={colors.blue_dark}/>:<></>
            }
    />  
       
  </Container>
  )
  }