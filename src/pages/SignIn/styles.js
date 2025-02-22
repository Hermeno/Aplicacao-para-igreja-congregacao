import styled from 'styled-components/native';

export const Background = styled.View`
    background-color: #131313;
    flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 90px;
    width: 185px;
    color: #fafafa;
    background-color: #fafafa
`;

export const AreaInput = styled.View`
    margin-top: 20px;
    width: 90%;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #3498db;
    width: 90%;
    height: 45px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;


export const Link = styled.TouchableOpacity`
    margin-top: 20px;
`;




export const LinkText = styled.Text`
    color: #3498db;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
`;
export const Div = styled.View`
  margin-top: 20px;
  font-size: 16px;
  color: #3498db;
  border-radius:7px;
  border: 1px solid #3498db;
  width: 90%;
  height:88px;
  text-align: center;
  align-items: center;
`;