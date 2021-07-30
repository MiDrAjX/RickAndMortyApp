import React from 'react';
import { InputText, Container, ButtonIcon } from './styles';

export function SearchField(){

  
    return(
      <Container>
      <ButtonIcon name="search"/>
      <InputText placeholder="Busque por um personagem"/>
      </Container>
    )
}