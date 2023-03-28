import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import React, { useState, useEffect,useRef } from 'react';
import io from 'socket.io-client';



const Home =({navigation})=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');


    const socket = io('ws://192.168.0.31:8080', { transports: ['websocket'] });

    useEffect(() => {
      socket.on('connect', () => {
        console.log('Socket.IO connected');
  
        // Send a message to the server after the connection is established
        socket.emit('chat message', 'Hello, server!');
      });
  
      socket.on('chat message', (message) => {
        console.log('Socket.IO message received:', message);
        setMessage(message);
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
    }, []);
    
    
    
    
    
  


  const pressHandler =() =>{
      navigation.navigate('WhereAreYouGoingInput');
      
  }
  const handleClick = () => {
    console.log('Sending message to server');
    socket.emit('chat message', { text: inputValue });
    setInputValue('');
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
     <FlatList
  data={messages}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={(item, index) => index.toString()}
/>
            <Text>{message.text}</Text>
            <TextInput value={inputValue} onChangeText={setInputValue} />

            <Button title="Send message to server" onPress={handleClick} />


         
            <OurData/>
         
    
             </View>

    
  
    </ScrollView>
    )
}

export default Home; 