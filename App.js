import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './src/pages/silentMoon/Home'
import LogIn from './src/pages/silentMoon/LogIn'
import CreateAccount from './src/pages/silentMoon/CreateAccount'
import LandingPage from './src/pages/silentMoon/LandingPage'


const Stack = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={LogIn} name="LogIn" />
        <Stack.Screen component={CreateAccount} name="CreateAccount" />
        <Stack.Screen component={LandingPage} name="LandingPage" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

