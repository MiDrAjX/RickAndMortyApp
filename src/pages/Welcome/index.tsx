import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import logoImage from '../../assets/rickyandmortylogo.png';
import wallpaper from '../../assets/wallpaper21.png';

import { Container, LogoImg, ButtonContainer, ButtonText, ButtonIcon } from './styles';

export default function Welcome() {

  return(
  <Container source={wallpaper} resizeMode="cover">
    <LogoImg source={logoImage} />
    <ButtonContainer>

      <ButtonText>Prosseguir</ButtonText>

      <ButtonIcon name="arrow-right" />

    </ButtonContainer>

  </Container>
  )
};
