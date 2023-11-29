import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { StyleSheet } from 'react-native'

const primaryBtn = () => {
  return (
    <View>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Sign in</Text>
        </Pressable>
    </View>
  )
}

export default primaryBtn
const  style = StyleSheet.create({
    button :{
        backgroundColor:'#663399',
        padding: 14,
        width: '90%',
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonText:{
        textAlign: 'center',
        fontSize:18,
        color: "white"

    }
})