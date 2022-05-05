import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './tabs';

// import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from '../Screens/Login/index'
import Home from '../Screens/Home';
import Game from '../Screens/Game';
import Congratulation from '../Screens/Congratulation'
import QRcode from '../Screens/QRcode'
import HuongDan from '../Screens/HuongDan'
import BoSuuTap from '../Screens/BoSuuTap'
import Create from '../Screens/Create'
import DocEvent from '../Screens/DocEvent'
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Login'
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QRcode"
          component={QRcode}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="Game"
          component={Game}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Congratulation"
          component={Congratulation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HuongDan"
          component={HuongDan}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="BoSuuTap"
          component={BoSuuTap}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Create"
          component={Create}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DocEvent"
          component={DocEvent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}