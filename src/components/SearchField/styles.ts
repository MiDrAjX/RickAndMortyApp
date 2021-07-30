import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
width: 340px;
height: 50px;
flex-direction:row;
top: -25px;

background: #FFFFFF;
border-radius: 6px;
`

export const InputText = styled.TextInput`
  flex: 1;
  color: #222222;
  font-size: 16px;
  font-family: Poppins;
  left: 20px;
`;

export const ButtonIcon = styled(Icon)`
  top: 15px;
  left: 15px;
  color: #1E2047;
  font-size: 20px;
`;