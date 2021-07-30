import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const CardContainer = styled.TouchableOpacity`
flex-direction: row;
width: 340px;
height: 150px;
margin: 15px 0 0;
background: #f0f0f5;
border-radius: 6px;
`;

export const CardImage = styled.Image`
width: 140px;
height: 150px;
border-top-left-radius: 6px;
border-bottom-left-radius: 6px;
`;

export const CardInformation = styled.View`
flex: 1;
flex-direction: column;
justify-content: space-between;
padding: 10px;
`;

export const CardTitle = styled.Text`
color: #333333;
font-size: 20px;
font-family: Poppins;
`;

export const CardSubTitle = styled.Text`
color: #333333;
font-size: 14px;
font-family: Poppins;
line-height: 20px;
`;

export const CardText = styled.Text`
color: #333333;
font-size: 16px;
font-family: Poppins;
line-height: 20px;
`;

export const CardButtonIcon = styled(Icon)`
color: #1E2047;
box-shadow: 10px 5px 5px black;
font-size: 20px;
`;

export const ViewRow= styled.View`
flex-direction:row;
justify-content:space-between
`
