import { StyleSheet, Text, View, SafeAreaView, Pressable,TextInput, Alert} from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
// import { FacebookBtn } from '../../components/silentMoon/facebookBtn';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { Controller } from 'react-hook-form';




const LogIn = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    

    const schema = yup.object().shape({
        name: yup 
        .string()
        .required('name is required'),
        email: yup
          .string()
          .required('Email is required')
          .email('Invalid email'),
        password: yup
          .string()
          .required('Password is required')
          .min(8, 'Password must contain at least 8 characters'),
    });
    const {control,handleSubmit,formState: {errors}} = useForm({resolver: yupResolver(schema),
        defaultValues: {
            name: '',
          email: '',
          password: '',
        },
    });

    const onPressSend = () => {
        // try {
            // const response = await fetch('your_registration_api_endpoint', {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(formData),
            // });
    
            if (schema) {
                Alert.alert('Account Created !', 'proceed to login ?', [
                    {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('Home'),
                    style: 'cancel',
                    },
                    {text: 'OK', onPress: () => navigation.navigate('Login')},
                ]);
                 
            // Registration successful, navigate to the login screen
            
            } else {
                Alert.alert('Error :', 'Registration failed. Please try again', [
                {text: 'OK', onPress: () => navigation.navigate('Create-account')},

                ]);
        
            }
        // } catch (error) {
        //     ('Error during registration:', error);
        // }
    };




  return (
    <SafeAreaView style={styles.body}>
        <View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Create your account !</Text>
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
                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.inputField}
                                placeholder="name"
                                keyboardType='default'
                            />
                        )}
                        name="name"
                    />
                    {errors.name && <Text>{errors.name.message}</Text>}
                </View>
                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.inputField}
                                placeholder="anything@gmail.com"
                                keyboardType='email-address'
                            />
                        
                        )}
                        name="email"
                    />
                    {errors.email && <Text>{errors.email.message}</Text>}
                </View>
                <View>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry
                                style={styles.inputField}
                                placeholder='enter password'
                                keyboardType='default'
                                
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text>{errors.password.message}</Text>}
                </View>
                {/* <Button title="Submit" onPress={handleSubmit(onPressSend)} /> */}
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
                    onPress={()=> onPressSend}
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
    greetingContainer:{
        marginVertical: 20,

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
