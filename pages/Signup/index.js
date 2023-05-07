import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import React, { useState, useEffect,useRef } from 'react';
import LoginButton from 'health-wetu/components/LoginButton/index.js';
import FormButton from 'health-wetu/components/FormButton/index.js';
import DirectionButton from 'health-wetu/components/DirectionButton/index.js';
const SignUp =({navigation})=> {
    const handleLogin = () => {
        // Handle login action here
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
            <FormButton text='Name'/>
            <FormButton text='Email'/>
            <FormButton text='Phone Number'/>
            <FormButton text='Password' secureTextEntry />
            <FormButton text='Confirm Password' secureTextEntry />
            <LoginButton onPress={handleLogin} text={'Sign Up'}/>


        </View>
    );
}
export default SignUp;
