import { StyleSheet, Text, Image,TextInput, TouchableOpacity,FlatList , View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import React, { useState, useEffect,useRef } from 'react';
import io from 'socket.io-client';
//import { useAuth } from '../../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home =({navigation})=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  //const { authState } = useAuth();
  const [userData, setUserData] = useState(null);


 /*ws://192.168.0.31:8080 */
  /*wss://healthwetu.nw.r.appspot.com:8080 */ 

  const apiKey = 'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU';

  const findNearestHospital = async () => {
    try {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&type=hospital&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      const nearestHospital = data.results[0];
      //setLoading(false);
      setDestinationPlace({
        description: nearestHospital.name,
        geometry: { location: nearestHospital.geometry.location },
      });
      console.log(destinationPlace);
      
    } catch (error) {
      //setLoading(false);
      console.error(error);
    }
  };

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
         <Text>{'joshua'}</Text>
         <View styles={styles.container}>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
            <OurButton text='Call Now !! ' onPress={findNearestHospital} /> 
        


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