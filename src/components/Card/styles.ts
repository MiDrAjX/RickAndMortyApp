import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const CardContainer = styled.TouchableOpacity`
flex-direction: row;
width: 370px;
height: 150px;
background: #f0f0f5;
border-radius: 6px;
`;
export const LikeContainer = styled.TouchableOpacity`
flex-direction: row;
bottom: 28px;
left: 340px;
width: 15px;
height: 15px;
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
font-family: 'Poppins-SemiBold';
`;

export const CardSubTitle = styled.Text`
color: #333333;
font-size: 14px;
font-family: 'Poppins-Regular';
line-height: 20px;
`;

export const CardText = styled.Text`
color: #333333;
font-size: 16px;
font-family: 'Poppins-SemiBold';
line-height: 20px;
`;

export const ViewRow= styled.View`
flex-direction:row;
justify-content:space-between
`
