import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack'
import Home from  '../pages/Home';



const AppStack = createStackNavigator ();

export default function AppRoutes()
{
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="SignIn" component={SignIn} options={{headerTitle: 'Sign In'}}/>
        </AppStack.Navigator>
    )
}