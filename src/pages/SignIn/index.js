import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input, ButtonText, Button, Link, LinkText, Div } from './styles'


export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);


  function handleLogin() {
    console.log(user.name)
  }
 return (
   <Background>
     <Container
      behavior={Platform.Os === 'ios' ? 'padding' : ''}
      enabled
     >


       <Logo source = {require('../../assets/Logo_oficial_CCB.png')} />


       <AreaInput>
        <Input 
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
        />
       </AreaInput>


       <AreaInput>
        <Input 
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        />
       </AreaInput>

       <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
       </Button>

       <Div>
        <Link onPress={ () => navigation.navigate('SignUp') }>
          <LinkText>Criar uma conta</LinkText>
        </Link>
       </Div>





     </Container>
   </Background>
  );
}