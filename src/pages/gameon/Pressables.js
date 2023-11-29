import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';



export default function App() {



  const [email, setEmail] = useState('')
  const [password, setPasswordState] = useState('')
  const [login, setLoginState] = useState(false)

  function loginAction(){
    setLoginState()
  }
  return(
    <View style={styles.body}>
        <StatusBar style="auto" />
        <View style={styles.logo}>
          <Image 
            style={{width:100,height: 30.}}
            source={
              require('./src/lemon.jpeg')}>
          </Image>
          <Text style={styles.logoText}>Little Lemon</Text>
        </View>
        <Pressable style={styles.heading}>
            <Text style={styles.greeting}>Welcome to Little Lemon</Text>
            <Text style={styles.message}>Login to continue</Text>
        </Pressable>
       
        {/* {login ? ( */}
        <View style={styles.inputFieldContainer}>
       
          <View style={{display:'flex'}}>
            <TextInput
                style={styles.inputField}
                value={Text}
                placeholder="anything@gmail.com"
                keyboardType='email-address'
            />
            <TextInput
              style={styles.inputField}
              value={Number}
              placeholder='enter password'
              keyboardType='numeric'
            />
           

          
          </View>

          <Pressable 
            style={({pressed})=>[
            styles.pressable,
            {backgroundColor :pressed ? 'blue': 'green'}
           ]}
           onPress={loginAction}
          >
            <Text style={styles.pressableText}>Login</Text>
          </Pressable>
        </View>
        {/* ): */}
        {/* ( */}
          <View >
            <Text>Welcome to Little{"\n"} Lemon</Text>
            <Text>You are logged in!</Text>
          </View>
        {/* )} */}

        <View style={styles.footer}>
          <Text style={styles.footerText}>All right reserved be Little Lemon, 2023</Text>
        </View>

      </View>    
  )

}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // height:'100%'
  },
  logo: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#cd5c5c',
    // paddingHorizontal:110,
    width:'100%',
    height:130,
    alignItems: 'flex-start',
  },
  logoText:{
      fontSize: 26,
      padding: 16,
      fontStyle:'italic',
      textAlign: 'center'

  },
  greeting:{
    fontSize: 24,
    color:'white',
    textAlign: 'center',
},
  message:{
      color: 'white',
      fontSize: 18,
      textAlign:'center',
  },
  heading:{
      gap: 10,
      // marginBottom: 10,
      paddingVertical: 20,
  },
  inputFieldContainer:{
    // flex: 1,
    backgroundColor: '#333333', 
    height: '100',
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 80
  },
  inputField: {
    // height: 40,
    width: '100',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    color:'black',

  },
  pressable:{
    backgroundColor:'blue',
    paddingHorizontal: 50,
    paddingVertical: 13,
    borderRadius: 8,
  },
  pressableText:{
    color: 'white',
    fontSize: 20,
  },
  footerText:{
    color:'#333333',
    fontSize:12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer:{
      backgroundColor: '#cd5c5c',
      padding : 10,
      width:'100%'
  }
});
