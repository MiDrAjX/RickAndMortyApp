import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import api from "../../services/api";
import { Linking, Text, View } from 'react-native';

import { 
  Container, 
  CharacterButtonIcon, 
  CharacterImage, 
  CharacterTitle, 
  ViewRow, 
  CharacterSubTitle, 
  CharacterText,
  ViewSpace,
  CharacterLocation,
  ViewSpace2,
  Footer,
  FooterText,
  ReturnButton,
  ReturnButtonIcon,
  CharacterInfo,
} from './styles';
import { Load } from '../../components/Load';

type ParamList = {
  CharacterOverView: {
    id: string;
  };
};
export interface Character{
  id: string;
  name: string;
  status:string;
  gender:string;
  image: string;
  species: string;
  origin:{
    name:string,
    url:string
  }
  location:{
    name:string,
    url:string
  }
  }

export default function CharacterOverView(){
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const route = useRoute<RouteProp<ParamList, 'CharacterOverView'>>();
  const { id } = route.params;

  const navigation = useNavigation();
  function handleReturn(){
    navigation.navigate("CharacterList")
}
  useEffect(() => {
    api.get(`/character/${id}`).then((response) => {
      if(!response){
        return setLoading(true);}
      setCharacter(response.data);
      setLoading(false);
    });
  }, []);
  const handleGoogle = useCallback(async searchName => {
    Linking.openURL(`https://www.google.com/search?q=${searchName}+rick+and+morty`);
  }, []);

  if(loading){ 
    return <Load/>
}
  return(
   <Container>
     
     <CharacterImage source={{ uri: character.image }} resizeMode="cover"/>
     <ReturnButton onPress={handleReturn}>
        <ReturnButtonIcon name="arrow-left" />
      </ReturnButton>
    <CharacterInfo>
     <ViewRow>
     <CharacterTitle numberOfLines={1}>
     {character.name}
      </CharacterTitle>
      <CharacterButtonIcon name="heart"/>
     </ViewRow>
     <ViewRow>
     <ViewSpace>
        <CharacterSubTitle>Species:</CharacterSubTitle>
        <CharacterText>{character.species}</CharacterText>
      </ViewSpace>
      <ViewSpace>
        <CharacterSubTitle>Gender:</CharacterSubTitle>
        <CharacterText>{character.gender}</CharacterText>
      </ViewSpace>
      </ViewRow>
      <ViewSpace>
        <CharacterLocation>Location:</CharacterLocation>
        <CharacterLocation>{character.location.name}</CharacterLocation>
      </ViewSpace>
      <ViewRow>
     <ViewSpace2 >
        <CharacterSubTitle >Origin:</CharacterSubTitle>
        <CharacterText>{character.origin.name}</CharacterText>
      </ViewSpace2>
      <ViewSpace2>
        <CharacterSubTitle>Status:</CharacterSubTitle>
        <CharacterText>{character.status}</CharacterText>
      </ViewSpace2>
      </ViewRow>
      </CharacterInfo>
      <Footer onPress={()=>handleGoogle(character.name)}>
        <FooterText>Buscar no Google</FooterText>
      </Footer>
   </Container>
  )
  }
/**
 * 
 *  <Container>
    <CharacterImage source={{ uri: "https://rickandmortyapi.com/api/character/avatar/61.jpeg" }} resizeMode="cover"/>  
  </Container>

  async function fetchCharacter(){
    
    const {data} = await api.get(`/character/${id}`)
     
      if(!data){
          return setLoading(true);
      }
      setCharacter(data.results)      
      setLoading(false);
      }
      

  if(!loading){ 
      return <Load/>
  }
 */