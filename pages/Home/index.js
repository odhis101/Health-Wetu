import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import React, { useState, useEffect,useRef } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home =({navigation})=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { authState } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('userEmail', authState.user);
        await AsyncStorage.setItem('userPassword', authState.password);
      } catch (e) {
        console.log('Error storing data:', e);
      }
    };

    storeData();
  }, [authState]);
  const getData = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userPassword = await AsyncStorage.getItem('userPassword');
      console.log(userEmail, userPassword);
    } catch (e) {
      console.log(e);
    }
  };
  
  getData();

 /*ws://192.168.0.31:8080 */
  /*wss://healthwetu.nw.r.appspot.com:8080 */ 

    

  const pressHandler =() =>{
      navigation.navigate('WhereAreYouGoingInput');
      
  }
  const handleClick = () => {
    console.log('Sending message to server');
    socket.emit('chat message', { text: inputValue });
    setInputValue('');
};
 console.log('first log ever ')
 

console.log(authState.token)


    return( 
    <ScrollView>    
         <Text>{authState.user}</Text>
      <Text>{authState.token}</Text>  
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



         
            <OurData/>
         
    
             </View>

    
  
    </ScrollView>
    )
}

export default Home; 