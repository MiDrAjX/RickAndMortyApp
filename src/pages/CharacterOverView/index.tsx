import React from 'react';
import { View, Text } from 'react-native';

import { 
  Container, 
  CharacterButtonIcon, 
  CharacterImage, 
  CharacterTitle, 
  ViewRow, 
  CharacterSubTitle, 
  CharacterText,
} from './styles';

export default function CharacterOverView(){

  return(
   <Container>
     <CharacterImage source={{ uri: "https://rickandmortyapi.com/api/character/avatar/61.jpeg" }} resizeMode="cover"/>
     <ViewRow>
     <CharacterTitle numberOfLines={1}>
        Morty
      </CharacterTitle>
      <CharacterButtonIcon name="heart"/>
     </ViewRow>
     <ViewRow>
     <View>
        <CharacterSubTitle>Species:</CharacterSubTitle>
        <CharacterText>Human</CharacterText>
      </View>
      <View>
        <CharacterSubTitle>Gender:</CharacterSubTitle>
        <CharacterText>Male</CharacterText>
      </View>
      </ViewRow>
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