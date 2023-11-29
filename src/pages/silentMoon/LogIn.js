import { StyleSheet, Text, View, SafeAreaView, Pressable,TextInput } from 'react-native'
import React from 'react'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import { FacebookBtn } from '../../components/silentMoon/facebookBtn';
// import { GoogleButton } from '../../components/silentMoon/facebookBtn';



const LogIn = () => {
    // const facebookBtn = 'CONTINUE WITH FACEBOOK'
    // const googleBtn = 'CONTINUE WITH GOOGLE'
  return (
    <SafeAreaView style={styles.body}>
        <View>
            <Pressable>
                <View style={styles.backIconContainer}>
                <Ionicons name="arrow-back" size={24} style={styles.backIcon}/>            
                </View>
            </Pressable>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Welcome Back !</Text>
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

            <View>
                <Pressable 
                    style={({pressed})=>[
                    styles.button,
                    {backgroundColor :pressed ? 'blue': '#663399'}
                 ]}
                //   onPress={loginAction}
                 >
                    <Text style={{fontSize:15, color:'white'}}>Login</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.forgot}>Forgot password ?</Text>
            </View>
            <View style={styles.footer} >
                <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT ?</Text>
                <Text style={styles.footerText2}>LOGIN</Text>
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
    backIconContainer:{
        marginHorizontal: 10,
        marginTop: 40,
        // marginVertical: 20,
    },
    backIcon:{
        fontSize:40,
        // padding: 10

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
        fontSize: 14

    },
    inputFieldContainer:{
        // flex: 1,
        // backgroundColor: '#a9a9a9', 
        height: '100',
        width:'100%',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 80
      },
      inputField: {
        borderRadius: 15,
        width: '90%',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#dcdcdc',
        color:'black',
        marginHorizontal: 14
    
      },
      forgot:{
        textAlign: 'center',
        fontWeight: 'bold'
      },
      footer:{
        display: 'flex',        
        flexDirection:'row',
        marginTop: 100,
        // textAlign:'center'
      },
      footerText1:{
        fontSize: 12,
        fontWeight:'bold',
        textAlign:'center'
      },
      footerText2:{
        fontSize: 12,
        textDecorationLine:'underline',
        fontWeight: 'bold',
        paddingHorizontal:9,
        textAlign:'center'

      }

})
