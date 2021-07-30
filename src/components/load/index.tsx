import React from 'react';
import { useEffect } from 'react';

import rickyGif from '../../assets/RickyCoffe.gif';
import { Container, LoadGif } from './styles';

export function Load(){
  useEffect(() => {
    
    setTimeout(function(){console.log('Load')}, 1000);    
},[])
  
    return(
      <Container>
      <LoadGif source={rickyGif}/>
      </Container>
    )
}
