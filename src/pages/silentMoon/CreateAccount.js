import { StyleSheet, Text, View, SafeAreaView, Pressable,TextInput} from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { FacebookBtn } from '../../components/silentMoon/facebookBtn';



const LogIn = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // const facebookBtn = 'CONTINUE WITH FACEBOOK'
    // const googleBtn = 'CONTINUE WITH GOOGLE'
  return (
    <SafeAreaView style={styles.body}>
        <View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Create your account</Text>
            </View>
            <View>
                <Pressable style={styles.button}>
                   <FontAwesome name="facebook-f" style={styles.icon} />
                 <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.neutralIconContainer}>
                 <FontAwesome name="google" size={24} style={styles.neutralIcon} />
                 <Text style={styles.neutralIconButtonText}>CONTINUE WITH GOOGLE</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.inputHeaderText}>OR LOGIN WITH EMAIL</Text>
            </View>
            <View>
                <TextInput
                    style={styles.inputField}
                    value={Text}
                    placeholder="name"
                    keyboardType='default'
                />
            </View>
            <View>
                <TextInput
                    style={styles.inputField}
                    value={Text}
                    placeholder="anything@gmail.com"
                    keyboardType='email-address'
                />
            </View>
            <View>
                <TextInput
                style={styles.inputField}
                value={Number}
                placeholder='enter password'
                keyboardType='numeric'
                />
            </View>
            <View style={styles.checkboxContainer}>
                {/* <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                /> */}
            </View>

            <View>
                <Pressable 
                    style={({pressed})=>[
                    styles.loginButton,
                    {backgroundColor :pressed ? 'purple': '#663399'}
                 ]}
                //   onPress={loginAction}
                 >
                    <Text 
                    onPress={()=> navigation.navigate('Home')}
                    style={{fontSize:15, color:'white'}}>Login</Text>
                </Pressable>
            </View>
    

       
        </View>
    </SafeAreaView>
    
  )
}
export default LogIn

const styles = StyleSheet.create({
    body:{
        justifyContent:'space-between',
        margin:'auto',
        alignItems: 'center'
    },
    greetingText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#696969',
        textAlign: 'center',
        paddingVertical: 10
    },
    button :{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#663399',
        padding: 16,
        width: '90%',
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 10        

    },
    buttonText:{
        textAlign: 'center',
        fontSize:12,
        fontWeight:'bold',
        color: "white"

    },
    icon:{
        fontSize: 20,
        color: 'white',
        paddingHorizontal: 18,
    },
    neutralIconContainer:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'white',
        padding: 15,
        width: '90%',
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#a9a9a9',
        marginHorizontal: 10,
        marginVertical: 14,
    },
    neutralIcon: {
        fontSize: 20,
        // color: 'white',
        paddingHorizontal: 18,
    },
    neutralIconButtonText:{
        textAlign: 'center',
        fontSize:12,
        fontWeight:'bold',
        color: "black"
    },
    inputHeaderText:{
        color: '#808080',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 15,
        fontSize: 10

    },
    inputFieldContainer:{
        // flex: 1,
        // backgroundColor: '#a9a9a9', 
        // height: '100',
        // width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        // marginBottom: 80
      },
      inputField: {
        borderRadius: 15,
        width: '90%',
        padding: 12,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#dcdcdc',
        color:'black',
        marginHorizontal: 14
    
      },
      loginButton:{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor:'#663399',
            padding: 16,
            width: '90%',
            borderRadius: 40,
            alignItems:'center',
            justifyContent: 'center',
            marginHorizontal: 10,        
            marginVertical: 40
      }
})
