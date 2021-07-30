import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const CharacterImage = styled.Image`
width: 411px;
height: 437px;
left: 0px;
top: 0px;
`;

export const CharacterTitle = styled.Text`
top: 31px;
left: 20px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;

color: #333333;
`;

export const CardButtonIcon = styled(Icon)`
top: 34px;
right: 20px;
color: #1E2047;
font-size: 20px;
`;

export const ViewRow= styled.View`
flex-direction:row;
justify-content:space-between
`

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #C4C4C4;
  ` 

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 125px;
  padding: 0 20px;
  background: #1E2047;
  `;

  export const Title = styled.Text`
 
  color: #FFFFFF;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  `

  export const Quantidade = styled.Text`
  color: #C1C1C1;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  `;



