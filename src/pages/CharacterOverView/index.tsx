import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import api from "../../services/api";
import { Linking, Image, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import heart from '../../assets/heart.png'
import heartfill from '../../assets/heart-fill.png'

import { 
  Container,  
  CharacterImage, 
  CharacterTitle, 
  ViewRow, 
  CharacterSubTitle, 
  CharacterText,
  Footer,
  FooterText,
  ReturnButton,
  ReturnButtonIcon,
  CharacterInfo,
  LikeContainer,
  CharacterStatus,
} from './styles';
import { Load } from '../../components/Load';

type ParamList = {
  CharacterOverView: {
    id: string;
    isLiked: boolean;
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

  const [isLike, setIsLike]=useState(false);

  const route = useRoute<RouteProp<ParamList, 'CharacterOverView'>>();
  const { id, isLiked } = route.params;

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
  
  const readLike = async (id:string)=>{
    try{
      const chave = await AsyncStorage.getItem(`key_${id}`)
      if(chave !== null){
        setIsLike(true);
        return chave
      }
    } catch (e){
      return
    }
  }
    useEffect(()=>{
      readLike(id)
    },[])
 
    async function LikeSave(id:string, liked:boolean){
      if(liked!==true){
      await AsyncStorage.setItem(`key_${id}`, String(id));
      }else{
      await AsyncStorage.removeItem(`key_${id}`)
      }
    }
  
  function handleLike(){
    setIsLike(!isLike)
    LikeSave(String(id), isLike)
  }

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
      <LikeContainer onPress={handleLike}>
  {isLike !== true ? <Image source={heart} /> : <Image source={heartfill} />}
      </LikeContainer>
     </ViewRow>
    
     <ViewRow>
     <View>
        <CharacterSubTitle>Espécie:</CharacterSubTitle>
        <CharacterText>{character.species=='Human'?'Humano':character.species}</CharacterText>
      </View>
      <View>
        <CharacterSubTitle>Gênero:</CharacterSubTitle>
        {character.gender!==('Genderless'&&'unknown')?
        <CharacterText>{character.gender=='Male'?'Masculino':'Feminino'||character.gender}</CharacterText>
        :
        <CharacterText>{character.gender=='unknown'?'Desconhecido':'Sem gênero'||character.gender}</CharacterText>  
      }
      </View>
      </ViewRow>
      
      
      <ViewRow>
      <View>
        <CharacterSubTitle>Localização:</CharacterSubTitle>
        <CharacterText>{character.location.name=='Earth (Replacement Dimension)'?'Terra Substituta':character.location.name}</CharacterText>
      </View>
      </ViewRow>
      
      <ViewRow>
      <View>
        <CharacterSubTitle >Origem:</CharacterSubTitle>
        <CharacterText>{character.origin.name=='Earth (Replacement Dimension)'?'Terra Substituta':character.origin.name}</CharacterText>
      </View>
      <View>
        <CharacterSubTitle>Status:</CharacterSubTitle>
        {character.status!=='unknown'?
            <CharacterStatus status={character.status=='Alive'?'alive':'dead'}>
              {character.status=='Alive'?'Vivo':'Morto'}
            </CharacterStatus> 
            :
            <CharacterStatus status={character.status}>
              Desconhecido
            </CharacterStatus> }
              
        </View>
      </ViewRow>
      
      </CharacterInfo>
      <Footer onPress={()=>handleGoogle(character.name)}>
        <FooterText>Buscar no Google</FooterText>
      </Footer>
   </Container>
  )
  }
