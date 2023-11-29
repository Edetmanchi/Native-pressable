import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import PrimaryBtn from '../../components/silentMoon/primaryBtn'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Image } from 'react-native-svg'


const Home = () => {
    const logoImg = "https://cdn.hashnode.com/res/hashnode/image/upload/v1701258301616/11ad2c52-31c5-4e93-83e3-f623b1325dcc.png"
    const ladyImg = "https://cdn.hashnode.com/res/hashnode/image/upload/v1701258307777/a7c81a35-0a59-4509-9ba8-c229a099b0a7.png"
  return (
    <SafeAreaView style={styles.body}>
        <View>
          <View style={styles.logoContainer}>
            <Text>silent</Text>
            <Image source={{uri:logoImg}} />
            <Text>Moon</Text>
          </View>
          <View style={styles.headerContainer}>
                <Text style={styles.headerText1}>Hi Afsar, Welcome</Text>
                <View>
                <Text style={styles.headerText2}>Tothe moon</Text>
                </View>
          </View>
          <View>
            <Image source={{uri: ladyImg}}/>
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
    backgroundColor:'#66339',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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