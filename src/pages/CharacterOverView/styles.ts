import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex:1;
  width: 100%;
  height: 100%;
  
  background-color: #F0F0F5;
  ` 

export const CharacterImage = styled.Image`
margin-bottom: 11px;
width: 100%;
height: 437px;
left: 0px;
top: 0px;
`;
export const CharacterInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-top: -30px;
  margin-bottom: 56px;
  padding: 15px 25px;
  background: #F0F0F5;
`;


export const CharacterTitle = styled.Text`
margin-bottom: 30px;
left: 0px;
position:absolute;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;

color: #333333;
`;

export const LikeContainer = styled.TouchableOpacity`
flex-direction: row;
left: 160px;
top:11px;
width: 15px;
height: 15px;
border-radius: 6px;
`;

export const CharacterSubTitle = styled.Text`
width: 100%;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #333333;
`;

export const CharacterText = styled.Text`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

color: #333333;
`;

export const CharacterLocation = styled.Text`
left: 58px;
top:-10px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

color: #333333;
`;

export const ViewRow= styled.View`

flex-direction:row;
justify-content:space-around;
`
export const ViewSpace= styled.View`
left:-55px;
top:10px;
`
export const ViewSpace2= styled.View`
width: 100%;
left: 90px;

`

export const Footer = styled.TouchableOpacity`
position: absolute;
left: 0;
bottom: 0;
right: 0;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 0;
height: 56px;
background-color: #1E2047;
` 
export const FooterText= styled.Text`
margin-left: 16px;
font-size: 20px;
font-family: Poppins;
line-height: 33px;
text-align: center;

color: #E1E1E6;
`
  export const Title = styled.Text`
 
  color: #FFFFFF;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  `
  export const ReturnButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 15px;
  height: 50px;
  width: 50px;
  background: #1E2047;
  border-radius: 25px;
`;

export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;
  color: #FFFFFF;
  font-size: 26px;
`;


