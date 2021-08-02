import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
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
  font-family: 'Poppins-SemiBold';
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
  `

  export const Quantidade = styled.Text`
  color: #C1C1C1;
  font-family: 'Poppins-Light';
  font-style: normal;
  font-size: 14px;
  line-height: 32px;
  `;

export const ContainerLista = styled.View`
width: 371px;
height: 50px;
flex-direction:row;
top: -25px;

background: #FFFFFF;
border-radius: 6px;
`

export const InputTextLista = styled.TextInput`
  flex: 1;
  color: #222222;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  left: 20px;
`;

export const ButtonIconLista = styled(Icon)`
  top: 15px;
  left: 15px;
  color: #1E2047;
  font-size: 20px;
`;



