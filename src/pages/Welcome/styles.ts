import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

export const LogoImg = styled.Image`
position: absolute;
width: 300px;
height: 127.5px;
left: 56px;
top: 15px;

`
export const ButtonContainer = styled(RectButton)`
  position: absolute;
  width: 340px;
  height: 55px;
  left: 30px;
  top: 636px;

  background: #1E2047;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
top:16px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;

text-align: center;

color: #FFFFFF;
`;

export const ButtonIcon = styled(Icon)`
  left:216px;
  top:-4px;
  color: #FFFFFF;
  font-size: 20px;
`;

export const Loader = styled.ActivityIndicator`
  margin: 15px 0;
`;