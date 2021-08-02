import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {Character} from '../../pages/CharacterList';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import heart from '../../assets/heart.png';
import heartfill from '../../assets/heart-fill.png';

import {
  CardContainer,
  CardImage,
  CardInformation,
  CardTitle,
  CardSubTitle,
  CardText,
  ViewRow,
  LikeContainer,
} from './styles';

interface CharacterProps {
  item:Character;
}

export default function Card({item}:CharacterProps){


  const [isLike, setIsLike]=useState(true);

  const navigation = useNavigation()

  async function LikeSave(id:string, liked:boolean){
    if(liked==true){
    await AsyncStorage.setItem(`key_${id}`, String(id));
    }else{
    await AsyncStorage.removeItem(`key_${id}`)
    }
  }

  function handleLike(){
    setIsLike(!isLike);
    LikeSave(String(item.id), isLike)
  }

  const handleCharacterListAcess = useCallback(
    (id: string, Liked: boolean) => {
      navigation.navigate('CharacterOverView', { id, Liked });
    },
    [navigation],
  );

  useEffect(()=>{
    const readLike = async (id:string)=>{
      try{
        const chave = await AsyncStorage.getItem(`key_${id}`)
          if(chave !== null){
            setIsLike(false);
            return chave
          }
        } catch (e){
          return
        }
      }
      readLike(String(item.id))
    },[isLike])
     

 

return (
  <>
  <CardContainer onPress={()=>handleCharacterListAcess(item.id, isLike)}>
  <CardImage source={{ uri: item.image }} resizeMode="cover"/>
    <CardInformation>
    
    <CardTitle ellipsizeMode="tail"  numberOfLines={1}>
        {item.name}
      </CardTitle>

      <View>
        <CardSubTitle>Species:</CardSubTitle>
        <CardText>{item.species}</CardText>
      </View>
      <View>
        <CardSubTitle>Origin:</CardSubTitle>
        <ViewRow>
          <CardText>{item.origin.name}</CardText>
        </ViewRow>
      </View>
    </CardInformation>
  </CardContainer>
  <LikeContainer onPress={handleLike}>
  {isLike !== true ? <Image source={heartfill} /> : <Image source={heart} />}
  </LikeContainer>
  </>
);
};
