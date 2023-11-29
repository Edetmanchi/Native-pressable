import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LogIn from './CreateAccount'


const Home = ({navigation}) => {
  const image = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1701258288474/45c3eee0-e3e7-4d6b-afd3-1cbcfbbcbb01.png'
  const logo = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1701258301616/11ad2c52-31c5-4e93-83e3-f623b1325dcc.png'
  return (
    <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Text>silent</Text>
            <Image source={{ uri: logo }} style={styles.logo}/>
            <Text>Moon</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText1}>We are What We do</Text>
            <View>
              <Text style={styles.headerText2}>Thousands of People are using silent Moon for small meditation</Text>
            </View>
          </View>
          <View>
            <Pressable 
                  style={({pressed})=>[
                  styles.button,
                      {backgroundColor :pressed ? 'purple': '#663399'}
                  ]}
                  >
                    <Text
                      onPress={() => navigation.navigate('Log-in')}
                     style={styles.buttonText}>SIGN UP</Text>
              </Pressable>
          </View>
          <Pressable style={styles.footer}>
            <Text style={styles.footerText1}>
              ALREADY HAVE AN ACCOUNT? </Text>
                <Text  style={styles.footerText2}>LOG IN</Text>
          </Pressable>
        </View>
       
      </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
     body:{
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  logoContainer:{
    display: 'flex',
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // marginBottom: 40
  
  },
  logo:{
    height: 40,
    width: 30,
    resizeMode:'contain',
  },
  button :{
  backgroundColor:'#663399',
  paddingVertical:15,
  width: 280,
  borderRadius: 40,
  alignItems:'center',
  justifyContent: 'center',
  // marginHorizontal: 10  ,
},
  buttonText:{
    textAlign: 'center',
    fontSize:15,
    color: "white",
    fontWeight: 'bold'


  },
  headerText1:{
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText2:{
    color: '#808080',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  image: {
    height: 290,
    width: 300,
    resizeMode:'cover',
  },
  footer:{
    display: 'flex',        
    flexDirection:'row',
    marginTop: 12,
    alignItems: 'center'
  },
  footerText1:{
    fontSize: 10,
    fontWeight:'bold',
    color: '#696969',  },
  footerText2:{
    fontSize: 12,
    textDecorationLine:'underline',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // textAlign: 'center',

  }
})