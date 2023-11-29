import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const facebookBtn = ({text}) => {
  return (
    <SafeAreaView>
        <View>
            <Pressable>
                <View style={Styles.button}>
                    <FontAwesome name="facebook-f" style={Styles.icon} />
                    <Text style={Styles.buttonText}>{text}</Text>
                </View>
            </Pressable>
      
        </View>
    </SafeAreaView>
    
  )
}

export default facebookBtn




  


const Styles = StyleSheet.create({
    button :{
        display: 'flex',
        flexDirection:'row',
        backgroundColor:'#663399',
        padding: 14,
        width: '90%',
        borderRadius: 40,
        alignItems:'center',
        // justifyContent:"space-around"
    },
    buttonText:{
        textAlign: 'center',
        fontSize:12,
        fontWeight: 'bold',
        color: "white",
        paddingHorizontal: 20,


    },
    icon:{
        fontSize: 24,
        color: 'white',
        paddingHorizontal: 18,
    }
})





