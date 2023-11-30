import { StyleSheet, Text, View, SafeAreaView, Pressable,TextInput, Button,ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { Controller } from 'react-hook-form';



const LogIn = ({navigation}) => {


    // schema for form validation

    const schema = yup.object().shape({
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
          email: '',
          password: '',
        },
    });

    const onPressSend = (formData) => {
        // Perform actions with the validated form data
        navigation.navigate('Create-account');
      };


    
  return (
    <SafeAreaView style={styles.body}>
        <ScrollView>
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


            <View>
                <Pressable 
                    style={({pressed})=>[
                    styles.loginBtn,
                    {backgroundColor :pressed ? 'blue': '#663399'}
                 ]}
                //   onPress={loginAction}
                 >
                    <Text 
                        // onPress={handleSubmit(onPressSend)}
                      onPress={handleSubmit(onPressSend)}
                    style={{fontSize:12, color:'white',}}>Login</Text>
                </Pressable>
                <View style={{display: 'flex', flexDirection: 'column',justifyContent:'space-between', gap:30}}>
                    <Text style={styles.forgot}>Forgot password</Text>
                    <Pressable style={styles.footer}>
                        <Text style={styles.footerText1}>
                        ALREADY HAVE AN ACCOUNT? </Text>
                        <Text  style={styles.footerText2}>LOG IN</Text>
                    </Pressable>
                </View>
            </View>
          
   
        </View>
        </ScrollView>
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
        marginTop: 12,
        alignItems: 'center',
        marginHorizontal: 22
      },
      footerText1:{
        fontSize: 10,
        fontWeight:'bold',
        color: '#696969',  },
      footerText2:{
        fontSize: 12,
        textDecorationLine:'underline',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        // textAlign: 'center',
    
      }

})
