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
import { Gyroscope } from 'expo-sensors';
import { Audio } from 'expo-av';



const Home =({navigation})=> {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  //const { authState } = useAuth();
  const [userData, setUserData] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [loading, setLoading] = useState(false); // initialize the loading state as false

  const [gyroData, setGyroData] = useState({ x: 0, y: 0, z: 0 });
  const [fallState, setFallState] = useState('none');
  const [accelerationStartMagnitude, setAccelerationStartMagnitude] = useState(0);
 /*ws://192.168.0.31:8080 */
  /*wss://healthwetu.nw.r.appspot.com:8080 */ 

  const apiKey = 'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU';


  useEffect(() => {
    const subscription = Gyroscope.addListener((gyroscopeData) => {
      setGyroData(gyroscopeData);

      const magnitude = Math.sqrt(
        gyroscopeData.x ** 2 + gyroscopeData.y ** 2 + gyroscopeData.z ** 2
      );

      // Set experimental thresholds based on testing
      const accelerationThreshold = 5; // Adjust based on testing
      const decelerationThreshold = 1; // Adjust based on testing

      switch (fallState) {
        case 'none':
          if (magnitude > accelerationThreshold) {
            setFallState('acceleration');
            setAccelerationStartMagnitude(magnitude);
            console.log('Acceleration phase started');
          }
          break;

        case 'acceleration':
          if (magnitude < decelerationThreshold) {
            setFallState('deceleration');
            console.log('Deceleration phase started');
          }
          break;

        case 'deceleration':
          // Record angular velocity data during deceleration
          // Calculate magnitude of deceleration
          const decelerationMagnitude = accelerationStartMagnitude - magnitude;
          console.log('Deceleration magnitude:', decelerationMagnitude);

          // Define criteria for a fall based on acceleration and deceleration magnitudes
          const fallCriteria = {
            accelerationMagnitudeThreshold: 2, // Adjust based on testing
            decelerationMagnitudeThreshold: 2, // Adjust based on testing
          };

          // Check if the criteria for a fall are met
          if (
            accelerationStartMagnitude > fallCriteria.accelerationMagnitudeThreshold &&
            decelerationMagnitude > fallCriteria.decelerationMagnitudeThreshold
          ) {
            console.log('Fall detected!');
            // Trigger additional actions for a fall
          }

          // Reset state to 'none' after processing a fall
          setFallState('none');
          break;

        default:
          break;
      }
    });

    return () => {
      subscription.remove();
    };
  }, [fallState]);




  // audio sensor 
  useEffect(() => {
    // Request audio recording permissions
  
    const startRecording = async () => {
      try {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access audio was denied');
          return;
        }
  
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();
  
        // Analyze audio data for fall detection
      } catch (error) {
        console.error('Error starting audio recording:', error);
      }
    };
  
    startRecording();
  
    return () => {
      // Stop recording and clean up resources
    };
  }, []);
  
  

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
      navigation.navigate('searchResults', {
        originPlace,
        destinationPlace,
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