import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import PrimaryBtn from '../../components/silentMoon/primaryBtn'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Image } from 'react-native-svg'


const Home = () => {
  return (
    <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Text>silent</Text>
            {/* <Image source={require('./src/pages/silentMoon/logo.png')} /> */}
            <Text>Moon</Text>
          </View>
          <View style={styles.imgContainer}>
            {/* <Image source={require('./src/pages/silentMoon/home.png')}/> */}
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText1}>We are What We do</Text>
            <View>
              <Text style={styles.headerText2}>Thousands of People are using silent Moon for small meditation</Text>
            </View>
          </View>
          <View>
            <PrimaryBtn/>
            <Text>
              ALREADY HAVE AN ACCOUNT? 
              <Pressable><Text>LOG IN</Text></Pressable>
            </Text>
          </View>
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
    alignItems: 'center'
  },
  imgContainer:{
    padding: 30,
    marginTop: 20,
  },
  headerContainer:{
    marginHorizontal:10
  },
  headerText1:{
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText2:{
    color: '#808080',
    fontSize: 15,
    textAlign: 'center',
    padding: 12,
  }
})