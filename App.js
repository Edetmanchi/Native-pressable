import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Home from './src/pages/silentMoon/Home'
// import FacebookBtn from './src/components/silentMoon/facebookBtn'
// import LogIn from './src/pages/silentMoon/LogIn
// import CreateAccount from './src/pages/silentMoon/CreateAccount'
import LandingPage from './src/pages/silentMoon/LandingPage'


// const Stack = createNativeStackNavigator()
function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen component={Welcome} name="Home" />
    //     <Stack.Screen component={MainScreen} name="Main" />

    //   </Stack.Navigator>
    <View>
      {/* <Home/> */}
      {/* <LogIn/> */}
      {/* <FacebookBtn/> */}
      {/* <CreateAccount/> */}
      <LandingPage/>

    </View>


  )
}

export default App

