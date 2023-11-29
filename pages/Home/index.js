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
import * as Location from 'expo-location';



const Home =({navigation})=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  //const { authState } = useAuth();
  const [userData, setUserData] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [loading, setLoading] = useState(false); // initialize the loading state as false


 /*ws://192.168.0.31:8080 */
  /*wss://healthwetu.nw.r.appspot.com:8080 */ 

  const apiKey = 'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU';

  const findNearestHospital = async () => {
    try {
      setLoading(true);
  
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
  
      // Get current location
      const location = await Location.getCurrentPositionAsync();
      console.log('Current location:', location);
  
      // Fetch nearby hospitals
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&type=hospital&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
  
      // Check if there are results
      if (data.results.length === 0) {
        console.error('No hospitals found nearby');
        return;
      }
  
      // Get the nearest hospital
      const nearestHospital = data.results[0];
  
      // Set destination place
      setDestinationPlace({
        description: nearestHospital.name,
        geometry: { location: nearestHospital.geometry.location },
      });
  
      // Set origin place
      setOriginPlace({
        description: 'Current Location',
        geometry: { location: { lat: location.coords.latitude, lng: location.coords.longitude } },
      });
  
      console.log('Destination place:', destinationPlace);
  
      // Navigate to the DestinationScreen once data is loaded
      navigation.navigate('DestinationScreen', {
        origin: originPlace,
        destination: destinationPlace,
      });
  
    } catch (error) {
      // Handle errors based on their type
      if (error instanceof Location.PermissionError) {
        console.error('Error getting location permissions:', error);
      } else if (error instanceof Location.LocationError) {
        console.error('Error getting current location:', error);
      } else if (error instanceof FetchError) {
        console.error('Error fetching nearby hospitals:', error);
      } else {
        console.error('Unknown error:', error);
      }
    } finally {
      setLoading(false);
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