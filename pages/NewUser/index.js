import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import React, { useState, useEffect,useRef } from 'react';
import LoginButton from 'health-wetu/components/LoginButton/index.js';


const NewUser =({navigation})=> {
    const handleLoginButton = () => {
        navigation.navigate('Login');
      };
    
      const handleSignUpButton = () => {
        navigation.navigate('SignUp');
      };
    return (
        <View style= {styles.container}>
            <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
            <View style = {styles.LoginButton}>
            <LoginButton onPress={handleLoginButton} text={'login'}/>
            <LoginButton onPress={handleSignUpButton} text={'Sign Up'}/>
            </View>
        </View>
    );
}
export default NewUser;
