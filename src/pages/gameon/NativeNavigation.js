import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View, TextInput, Pressable, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainScreen from './MainScreen'

const Welcome = ({navigation}) => {
  return (

    <SafeAreaView style={Styles.header}>
        <View>
             <Text style={Styles.headerText}>GAMEON</Text>
       </View>
       {/* <View>
       <Image 
        source={require('my-game.jpeg')}
        />

       </View> */}
       <TouchableOpacity onPress={()=> Navigation.Navigate('MainScreen')} style={Styles.startButton}>
            <Text style={Styles.startButtonText}>Lets Begin</Text>
       </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default Welcome



const Styles = StyleSheet.create({
    header:{
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
        
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#20315f'
    },
    startButton :{
        backgroundColor:'#AD40AF',
        padding: 18,
        width: '80%',
        borderRadius: 10,

    },
    startButtonText:{
        color:'#fff',
        textAlign: 'center',
        fontSize:18,

    }

})