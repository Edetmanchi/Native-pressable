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
                    styles.loginBtn,
                    {backgroundColor :pressed ? 'blue': '#663399'}
                 ]}
                //   onPress={loginAction}
                 >
                    <Text style={{fontSize:12, color:'white',}}>Login</Text>
                </Pressable>
                <View>
                    <Text style={styles.forgot}>Forgot password</Text>
                    <View style={styles.footer}>
                        <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT ?</Text>
                        <Text style={styles.footerText2}>LOGIN</Text>
                    </View>
                </View>
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
    greetingContainer:{
        paddingVertical: 30,
    },
    button :{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#663399',
        padding: 14,
        width: '85%',
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 18        

    },
    buttonText:{
        textAlign: 'center',
        fontSize:10,
        fontWeight:'bold',
        color: "white"

    },
    icon:{
        fontSize: 18,
        color: 'white',
        paddingHorizontal: 18,
    },
    neutralIconContainer:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'white',
        padding: 14,
        width: '85%',
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#a9a9a9',
        marginHorizontal: 18,
        marginVertical: 20,
    },
    neutralIcon: {
        fontSize: 18,
        // color: 'white',
        paddingHorizontal: 18,
    },
    neutralIconButtonText:{
        textAlign: 'center',
        fontSize:10,
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
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 80
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
      loginBtn:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'#663399',
        padding: 14,
        width: '85%',
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        marginHorizontal: 18,  
        marginTop: 30

      },
      forgot:{
        textAlign: 'center',
        fontWeight: 'bold',
        padding:-19,
        color: '#696969'
      },
      footer:{
        display: 'flex',        
        flexDirection:'row',
        marginTop: 10,
        alignItems: 'center'
      },
      footerText1:{
        fontSize: 10,
        fontWeight:'bold',
        textAlign:'center',
        color: '#696969',
        textAlign: 'center'
      },
      footerText2:{
        fontSize: 10,
        textDecorationLine:'underline',
        fontWeight: 'bold',
        // paddingHorizontal:9,
        textAlign:'center',
        paddingHorizontal: 10,
        textAlign: 'center',

      }

})
