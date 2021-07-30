import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect } from 'react';
import {Character} from '../../pages/CharacterList';
import { View } from 'react-native';


import {
  CardContainer,
  CardImage,
  CardInformation,
  CardTitle,
  CardSubTitle,
  CardText,
  CardButtonIcon,
  ViewRow,
} from './styles';

interface CharacterProps {
  item:Character;
}

export default function Card({item}:CharacterProps){

  const navigation = useNavigation()

  const handleCharacterListAcess = useCallback(
    (name: string) => {
      navigation.navigate('CharacterOverView', { name });
    },
    [navigation],
  );

return (
  <CardContainer onPress={()=>handleCharacterListAcess(item.id)}>
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
          <CardButtonIcon name="heart" />
        </ViewRow>
      </View>

    </CardInformation>
  </CardContainer>
);
};
