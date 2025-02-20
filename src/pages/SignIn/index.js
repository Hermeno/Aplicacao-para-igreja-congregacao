import React from 'react';
import { View, Text } from 'react-native';
import { Background, Container, Logo, AreaInput, Input } from './styles'


export default function SignIn() {
 return (
   <Background>
     <Container>


       <AreaInput>
        <Input 
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        />
       </AreaInput>


       <AreaInput>
        <Input 
        placeholder="Senha"
        autoCorrect={false}
        autoCapitalize="none"
        />
       </AreaInput>




     </Container>
   </Background>
  );
}