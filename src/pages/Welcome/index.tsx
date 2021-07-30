import React from 'react';
import {useNavigation} from '@react-navigation/core';

import logoImage from '../../assets/rickyandmortylogo.png';
import wallpaper from '../../assets/wallpaper21.png';

import { Container, LogoImg, ButtonContainer, ButtonText, ButtonIcon } from './styles';

export default function Welcome() {

  const navigation = useNavigation()

  function handleCharacterListAcess(){
      navigation.navigate("CharacterList")
  }
  

  return(
  <Container source={wallpaper} resizeMode="cover">

    <LogoImg source={logoImage} />

    <ButtonContainer onPress={handleCharacterListAcess}>

      <ButtonText>Prosseguir</ButtonText>

      <ButtonIcon name="arrow-right" />

    </ButtonContainer>
    
  </Container>
  
  )
};
