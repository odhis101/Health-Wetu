import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import React, { useState, useEffect,useRef } from 'react';
import io from 'socket.io-client';



const Home =({navigation})=> {

    const socket = io('ws://10.66.5.84:8080', { transports: ['websocket'] });

    console.log('Socket.IO,',socket);


    socket.on('connect', () => {
      console.log('Socket.IO connected');
    
      // Send a message to the server after the connection is established
      socket.emit('chat message', 'Hello, server!');
    });
    
    socket.on('chat message', (message) => {
      console.log('Socket.IO message received:', message);
    });
    
    socket.on('disconnect', () => {
      console.log('Socket.IO disconnected');
    });
    socket.on('connect_error', (error) => {
        console.error('Socket.IO connection error:', error);
      });
      
      socket.on('connect_timeout', (timeout) => {
        console.error('Socket.IO connection timeout:', timeout);
      });
      
      socket.on('error', (error) => {
        console.error('Socket.IO error:', error);
      });
    
    
    
    
    
    
  


  const pressHandler =() =>{
      navigation.navigate('WhereAreYouGoingInput');
      
  }
  const handleClick = () => {
    console.log('Sending message to server');
    socket.emit('chat message', 'Hello, server!');
};
 console.log('first log ever ')
 




    return( 
    <ScrollView>
        
         <View styles={styles.container}>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
            <OurButton text='Where are you ' onPress={pressHandler} /> 
        


            <ModuleButton text = 'calling for a friend '/>
            <Button title="Send message to server" onPress={handleClick} />


         
            <OurData/>
         
    
             </View>

    
  
    </ScrollView>
    )
}

export default Home; 