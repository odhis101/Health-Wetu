import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import React, { useState, useEffect,useRef } from 'react';
import LoginButton from 'health-wetu/components/LoginButton/index.js';
import FormButton from 'health-wetu/components/FormButton/index.js';
import DirectionButton from 'health-wetu/components/DirectionButton/index.js';
import { useAuth } from '../../AuthContext';
const Login =({navigation})=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const { setAuthState } = useAuth();
    
    const handleLogin = async () => {
        try {
          const response = await fetch('http://192.168.0.102:8080/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await response.json();
          console.log(useAuth())
          console.log(data); // Do something with the response data
          setAuthState({ user: data });
          navigation.navigate('Home');
        } catch (error) {
          console.error(error);
        }
      };
      
      const goBack = () => {
        navigation.goBack();
        };
    return (
        <View>
            <View style= {styles.container}>
            <DirectionButton navigation={goBack} arrowdirection={'arrowleft'} size = {12}/>
            <Text style={{ fontSize: 22, marginBottom: '10%', marginTop:'5%',fontWeight: 'bold' }}>Login</Text>
            </View>
            <FormButton text='Email' textValue = {email} textOnchange = {setEmail}/>
            <FormButton text='Password'  textValue = {password} textOnchange = {setPassword} secureTextEntry />
            <LoginButton onPress={handleLogin} text={'Login'}/>


        </View>
    );
}
export default Login;
