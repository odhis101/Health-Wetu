import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import React, { useState, useEffect,useRef } from 'react';
import LoginButton from 'health-wetu/components/LoginButton/index.js';
import FormButton from 'health-wetu/components/FormButton/index.js';
import DirectionButton from 'health-wetu/components/DirectionButton/index.js';
import { useAuth } from '../../AuthContext';
import Toast from 'react-native-toast-message';

const Login =({navigation})=> {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const { setAuthState } = useAuth();

    const handleLogin = async () => {
      try {
        const response = await fetch('http://192.168.100.107:8080/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            emailOrPhone: emailOrPhone,
            password: password,
          }),
        });
        const data = await response.json();
    
        if (response.status === 200) {
          setAuthState({
            user: emailOrPhone,
            token: data.token,
            password: password,
          });
          navigation.navigate('Home');
        } else {
          setErrorMsg(data.message);
          console.log(data.message);
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: data.message,
            visibilityTime: 3000,
            autoHide: true,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    
      
      const goBack = () => {
        navigation.goBack();
        };
    return (
        <View style={{backgroundColor:'white', height:'100%'}}>
          
            <View style= {styles.container}>
            
            <DirectionButton navigation={goBack} arrowdirection={'arrowleft'} size = {12}/>
            <Text style={{ fontSize: 22, marginBottom: '10%', marginTop:'5%',fontWeight: 'bold' }}>Login</Text>
            </View>
            <FormButton text='Email or phone number' textValue = {emailOrPhone} textOnchange = {setEmailOrPhone}/>
            <FormButton text='Password'  textValue = {password} textOnchange = {setPassword} secureTextEntry />
            <LoginButton onPress={handleLogin} text={'Login'}/>
            <Toast/>


        </View>
    );
}
export default Login;
