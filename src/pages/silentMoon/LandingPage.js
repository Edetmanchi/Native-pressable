import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { FacebookBtn } from '../../components/silentMoon/facebookBtn';
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Image } from 'react-native-svg'


const Home = ({navigation}) => {
    const logoImg = "https://cdn.hashnode.com/res/hashnode/image/upload/v1701258301616/11ad2c52-31c5-4e93-83e3-f623b1325dcc.png"
    const ladyImg = "https://cdn.hashnode.com/res/hashnode/image/upload/v1701258307777/a7c81a35-0a59-4509-9ba8-c229a099b0a7.png"
  return (
    <SafeAreaView style={styles.body}>
        <View>
          <View style={styles.logoContainer}>
            <Text style={{color:'white'}}>silent</Text>
                <Image source={{ uri: logoImg }} style={styles.logo}/>
            <Text style={{color:'white'}}>Moon</Text>
          </View>
          {/* page description */}
          <View style={styles.headerContainer}>
                <Text style={styles.headerText1}>Hi Afsar, Welcome</Text>
                <View>
                <Text style={styles.headerText2}>to the moon</Text>
                </View>
          </View>
          <View style={styles.imgContainer}>
            <Image source={{uri: ladyImg }} style={styles.image}/>
          </View>
          <View>
            <Pressable 
                style={({pressed})=>[
                styles.button,
                    {backgroundColor :pressed ? 'purple': 'white'}
                ]}
               
                >
                    <Text
                    onPress={()=> navigation.navigate('Create-account')}
                    style={{fontSize:15, color:'black'}}>GET STARTED</Text>
            </Pressable>
            </View>
        </View>
       
      </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    body:{
    backgroundColor:'#663399',
    height:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer:{
    display: 'flex',
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    height: 50,
    width: 30,
    resizeMode:'contain',
  },
  imgContainer:{
    // padding: 30,
    marginVertical: 10,
  },
  image:{
    height: 300,
    width: 300,
    resizeMode:'contain',
  },
   
  headerContainer:{
    marginHorizontal:20
  },
  headerText1:{
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
  headerText2:{
    color: 'white',
    fontSize: 15,
    fontWeight:'bold',
    textAlign: 'center',
    padding: 12,
  },
  button :{
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    width: '90%',
    borderRadius: 40,
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal: 10  ,
    fontWeight: 'bold'



},
})