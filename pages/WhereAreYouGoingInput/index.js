import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import OurButton from "C:/Users/josho/health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
const Destination = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

  
    const navigation = useNavigation();
  
    const checkNavigation = () => {
      if (originPlace && destinationPlace) {
        navigation.navigate('searchResults', {
          originPlace,
          destinationPlace,
        })
      }
    }
  
    useEffect(() => {
      checkNavigation();
    }, [originPlace, destinationPlace]);



  
    const apiKey = 'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU';

    async function findNearestHospital() {
        try {
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
        } catch (error) {
          console.error(error);
        }
      }
      location = findNearestHospital();
      console.log('here it is')
      console.log(location)
      function printLocation(){
          console.log(location)
      }
      const nearByHospitals =async() => {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
          }
          const originPlace = await Location.getCurrentPositionAsync({});
          const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${originPlace.coords.latitude},${originPlace.coords.longitude}&rankby=distance&type=hospital&key=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          const destinationPlace = data.results[0];
          console.log('here it is', destinationPlace, originPlace)
          navigation.navigate('searchResults', {
            originPlace,
            destinationPlace,
          })
        } catch (error) {
          console.error(error);
        }
        
       
    }

    return(
        /*
        useEffect(() => {
            (async () => {
              
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
              }
        
              let location = await Location.getCurrentPositionAsync({});
              setLocation(location);
             
            })();
          }, []),
*/
    
        <View>

            <View style ={styles.container}>
            
            <View style={styles.inputBox}>
            
            <GooglePlacesAutocomplete
      placeholder='What is your  Location'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data, details});

        //console.log(data, details);
      }}
      enablePoweredBygoogle={false}
      fetchDetails= {true}
      currentLocation={true}
      currentLocationLabel="Current Location"
      query={{
        key: apiKey,
        language: 'en',
        components: 'country:ke',
      }}
    />
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign> 
            </View>
            </View>
     
            <View style={styles.inputBox}>
            <GooglePlacesAutocomplete
      placeholder='Which hospital are you going to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data, details});
       // console.log(data, details);
      }}
      enablePoweredBygoogle={false}
      fetchDetails= {true}
      query={{
        key: apiKey,
        language: 'en',
        components: 'country:ke',
      }}
    />
            <View style ={styles.Timebar}>
            <AntDesign name ={'arrowright'} size ={16} color={'red'}></AntDesign>   
            </View>         
            </View>
            <ModuleButton text = 'Current Location & Nearest Hospital  ' onPress ={nearByHospitals} />

            
        </View>
       
    
        </View>
        

    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:10,
        marginRight:10,
        height:'100%'
    },
    text: {
        fontSize: 20,
    
      },
      underline: {
        textDecorationLine: 'underline',
        textDecorationColor: 'red',
        textDecorationStyle: 'solid',
      
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
        margin:10,
        padding:10,
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
})
export default Destination
      