import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, ButtonText, Button } from '../SignIn/styles'


export default function SignIn() {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 return (
   <Background>
     <Container
      behavior={Platform.Os === 'ios' ? 'padding' : ''}
      enabled
     >


       {/* <Logo source = {require('../../assets/Logo_oficial_CCB.png')} /> */}

       <AreaInput>
        <Input 
        placeholder="Nome"
        autoCorrect={false}
        autoCapitalize="none"
        value={nome}
        onChangeText={text => setNome(text)}
        />
       </AreaInput>




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

       <Button>
        <ButtonText>Cadastrar</ButtonText>
       </Button>

       {/* <Link>
        <LinkText>Esqueceu a senha?</LinkText>
       </Link> */}




     </Container>
   </Background>
  );
}