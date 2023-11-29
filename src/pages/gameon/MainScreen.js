import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Welcome from './NativeNavigation';

const MainScreen = ({navigation}) => {
  return (
    <View>
        <AntDesign onPress={()=> navigation.navigate('Welcome')} name="arrowleft" size={24} color="black" />
      <Text>This is the main page</Text>
    </View>
  )
}

export default MainScreen