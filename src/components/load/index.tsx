import React from 'react';

import rickyGif from '../../assets/RickyCoffe.gif';
import { Container, LoadGif } from './styles';

export function Load(){
  return(
    <Container>
      <LoadGif source={rickyGif}/>
    </Container>
  )
}
