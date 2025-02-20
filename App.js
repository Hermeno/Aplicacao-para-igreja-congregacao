import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import Routes from './src/routes';




export default function App(){
  return(
    <NavigationContainer>
      <StatusBar background="#123123" barStyle="light-content"/>
      <Routes />
    </NavigationContainer>
  );
}


