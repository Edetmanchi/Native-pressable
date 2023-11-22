import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
// import Header from './src/components/Header';
// import Body from './src/components/Body';
// import Footer from './src/components/Footer';

export default function App() {
  const loginState = () =>{
    const [email, setEmail] = useState('')
    const [password, setPasswordState] = useState('')
    const [login, setLoginState] = useState(false)

    function loginAction(){
      setLoginState(!login)
    }
  }



  return(
    <View style={styles.body}>
        <StatusBar style="auto" />
        <View style={styles.logo}>
          <Text style={styles.logoText}>Little Lemon</Text>
        </View>
        {!login ? (
        <View style={styles.inputFieldContainer}>

          <View style={styles.heading}>
            <Text style={styles.greeting}>Welcome to Little Lemon</Text>
            <Text style={styles.message}>Login to continue</Text>
          </View>
          <View style={{display:'flex'}}>
            <Text>Email</Text>
            <TextInput
                style={styles.inputField}
                // onChangeText={onChangeNumber}
                value={Text}
                placeholder="anything@gmail.com"
                keyboardType='email-address'
            />
          </View>


          <View>
            <Text>Password</Text>
            <TextInput
                style={styles.inputField}
                // onChangeText={onChangeNumber}
                value={Number}
                placeholder="enter password"
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
        ):
        (
          <View style={styles.successContainer}>
            <Text style={styles.intro}>Welcome to Little{"\n"} Lemon</Text>
            <Text style={styles.successMessage}>You are logged in!</Text>
          </View>
        )}

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
    backgroundColor: '#cd5c5c',
    // paddingHorizontal:110,
    width:'100%',
    // justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
  logoText:{
      fontSize: 26,
      padding: 16,
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
      marginBottom: 70
  },
  inputFieldContainer:{
    // flex: 1,
    backgroundColor: '#333333', 
    height: '80%',
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 30
  },
  inputField: {
    height: 50,
    // width: '100%',
    padding: 30,
    margin: 5,
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
    fontSize:11,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footer:{
      backgroundColor: '#cd5c5c',
      padding : 10,
      width:'100%'
  }
});
