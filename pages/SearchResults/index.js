import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from "react-native-vector-icons/Ionicons"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import { useRoute } from '@react-navigation/native'; 
import io from 'socket.io-client';

import * as Location from 'expo-location';
const SearchResults = ({navigation}) =>{
  const socket = io('ws://192.168.0.31:8080', { transports: ['websocket'] });
  function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  
 

  const route = useRoute();
  const MAX_ZOOM_LEVEL = 18;
  const {originPlace, destinationPlace} = route.params
  console.log('this is origin place',originPlace)
  console.log('this is destination place',destinationPlace)
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [ambulanceLocation, setAmbulanceLocation] = useState({
    
    IERGq1ZSzNjQ430gjoshua: '-1.2740597 35.7885309',
    IERGq1ZSzNjQ430gAAsAN: '-1.2740597 36.7885309',
    IERGq1ZSzNjQ430gAAssdAN: '-1.2740597 38.7885309',
  });


  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket.IO connected');

      // Send a message to the server after the connection is established
      socket.emit('chat message', 'Hello, server!!!!');
    });


  
    socket.on('chat message', (ambulanceLocation) => {
      console.log('Received message from server:', ambulanceLocation);
      //socket.emit('ambulance location', 'connected!!!!');

      //console.log('Received message from server:', ambulanceLocation);
    })
    socket.on('ambulance location updated', (newLocation) => {
      console.log('Received new ambulance location:', newLocation);
      setAmbulanceLocation(newLocation);
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



  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 5000 },
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          
          // Emit location data on 'userLocation' event
          console.log('sending user location', { latitude, longitude }, 'to server loCATION');
          socket.emit('user location', `${latitude} ${longitude}`);
        },
      );
    })();
  }, []);
  console.log('Location.watchPositionAsync',location)
  const [closestAmbulanceId, setClosestAmbulanceId] = useState(null);
  useEffect(() => {
    if (location.latitude && location.longitude) {
      let closestDistance = Infinity;
      let closestAmbulanceId = null;
      Object.keys(ambulanceLocation).forEach(ambulanceId => {
        const [latitude, longitude] = ambulanceLocation[ambulanceId].split(' ');
        const distanceToAmbulance = distance(
          location.latitude,
          location.longitude,
          latitude,
          longitude,
        );
        if (distanceToAmbulance < closestDistance) {
          closestDistance = distanceToAmbulance;
          closestAmbulanceId = ambulanceId;
        }
      });
      setClosestAmbulanceId(closestAmbulanceId);
    }
  }, [location, ambulanceLocation]);

console.log('closest ambulance is ',closestAmbulanceId)
  

  
  const pressHandler =() =>{
    console.log('Press handler called')
// we send a request using socket.emit('request ambulance', { closestAmbulanceId, destinationPlace })
socket.emit('request ambulance', { ambulanceId: closestAmbulanceId, destination: destinationPlace.description });

    // if request has been accepted, navigate to enroute screen
    /*
    navigation.navigate('EnRoute', {
      location,
      destinationPlace,
      closestAmbulanceId,
    })
    */
  }
 


  console.log('this is ambulance location ',ambulanceLocation )
return(

    // you need to add the navigation
    <View >
      <View style={styles.Header}>
   
      <OurButton text={destinationPlace.description} />  

        </View>
           <MapView style={styles.Image}
            provider={PROVIDER_GOOGLE}
           initialRegion={{
           
            latitude: -1.2921,
            longitude: 36.8219,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showsTraffic={true}
          showsIndoors={true}
          showsBuildings={true}
          maxZoomLevel={MAX_ZOOM_LEVEL}
          
          >

{Object.keys(ambulanceLocation).map((key) => (
  <Marker
    key={key}
    coordinate={{
      latitude: parseFloat(ambulanceLocation[key].split(" ")[0]),
      longitude: parseFloat(ambulanceLocation[key].split(" ")[1]),
    }}
    anchor={{ x: 0.5, y: 0.5 }}
  >
    <Image
      source={require("../../assets/ambulance.png")}
      style={{ width: 60, height: 60, resizeMode: "contain" }}
    />
  </Marker>
))}
        
          <MapViewDirections
          // this is the direction from your location to the closest hospital
          // origin value will be dynamically determined based on your location from the server 
          origin={{latitude:location.latitude,longitude:location.longitude}}
          destination= {{latitude:destinationPlace.geometry.location.lat,longitude:destinationPlace.geometry.location.lng}}
          strokeWidth={ 5 }
          strokeColor= 'red'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />
     
          <Marker 
          // this is the hospital  location
          coordinate= {{latitude:destinationPlace.geometry.location.lat,longitude:destinationPlace.geometry.location.lng}}
          title={'destination'}
          >
         
            </Marker>
          </MapView>
          <View style={styles.Container}>
          {/* image */}
          <Image style={styles.image} source={require('../../assets/ambulance.png')}></Image>

          <View style={styles.middleContainer}>
            <Text style= {styles.type}> Ambulance
                <Ionicons name={'person'} size ={12} />
                3
            </Text>
            <Text style={styles.time}>
            ETA: minutes
            </Text>

          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh 1000
            </Text>


          </View>
            
        </View>
      
      <Pressable onPress={pressHandler} style={styles.confirm}> 
          <Text style={styles.text}>
            Confirm Requests
          </Text>
         
        </Pressable>
    </View>
)
}
const styles = StyleSheet.create({

confirm:{
    padding: 10,
    margin:10,
    marginRight:10,
    backgroundColor:'red',
    alignItems:'center',
    
  },
  text:{
    color:'white',
    fontWeight:'bold',
  },
   

Image:{   
    paddingTop:40,
    height:250,
    width:'auto',
},
container:{

  backgroundColor:'white',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4.84,

  elevation: 5,
},

inputText:{
  fontSize:14,
  color:'black',
  
},
Timebar:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:35,
  padding:10,
  backgroundColor:'#fff',
  borderRadius:50,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4.84,

  elevation: 5,

},
inputBox:{
  backgroundColor:'#fff',
  margin:5,
  padding:5,
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems:'center',
  borderRadius:10,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4.84,

  elevation: 5,
},
Container:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 20,
    

},
image:{
    height:60,
    width:60,
    resizeMode:'contain',
},
middleContainer:{
  marginHorizontal:10,
  flex:1,
  marginBottom:5,
},

type:{
  fontWeight:'bold',
  fontSize:15,

},
rightContainer:{
  alignItems:'center',
  width:100,
  justifyContent:'flex-end',
  flexDirection:'row',


},
time :{
  color:'#5d5d5d',
},
price:{
  fontWeight:'bold',
  fontSize:14,
  marginLeft:5,
},
});
export default SearchResults;