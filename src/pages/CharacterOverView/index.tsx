import React from 'react';
import { View, Text } from 'react-native';

import { Container, CardButtonIcon, CharacterImage, CharacterTitle, ViewRow } from './styles';

export default function CharacterOverView(){

  return(
   <Container>
     <CharacterImage source={{ uri: "https://rickandmortyapi.com/api/character/avatar/61.jpeg" }} resizeMode="cover"/>
     <ViewRow>
     <CharacterTitle numberOfLines={1}>
        Morty
      </CharacterTitle>
      <CardButtonIcon name="heart"/>
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