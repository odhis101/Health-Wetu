import React, {useState,useEffect} from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable,Button} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useRoute } from '@react-navigation/native'; 
import * as Location from 'expo-location';

const EnRoute = (props) => {

  const route = useRoute();
const confirm = () => {
  console.warn('confirm')
}

// all the data you need is destination data and ambulance ID so the live data can be updated 
const { destinationPlace, ambulanceData} = route.params
const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

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
        },
      );
    })();
  }, []);   
  console.log('here it is', location)

return(
        <View style={styles.container}>
            <View style ={styles.Status}>
              <Text style= {styles.Title}>Ambulance En-route</Text> 
              <Text style= {styles.SubTitle}>To: {destinationPlace.name}</Text>
            </View>

            <MapView style={styles.Image}
            provider={PROVIDER_GOOGLE}
           initialRegion={{
           /*
            latitude: originPlace.details.geometry.location.lat,
            longitude: originPlace.details.geometry.location.lng,
            */
            latitude: -1.2921,
            longitude: 36.8219,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          >
            <Marker 
            // this is the ambulance location 
          //coordinate={{latitude:originPlace.details.geometry.location.lat,longitude: originPlace.details.geometry.location.lng}}
            coordinate={{latitude:-6.2921,longitude:36.8219}} // this will be where the closest ambulance is located 
        >
          <Image source={require('../../assets/ambulance.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
          </Marker>

  <MapViewDirections
          // this is the direction from the ambulance to your location
          origin={{latitude:-6.2921,longitude:36.8219}}
          destination= {{latitude:location.latitude,longitude:location.longitude}}
          strokeWidth={ 5 }
          strokeColor= 'black'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />

          <MapViewDirections
          // this is the direction from your location to the closest hospital 
          origin={{latitude:location.latitude,longitude:location.longitude}}
          destination= {{latitude:destinationPlace.geometry.location.lat,longitude:destinationPlace.geometry.location.lng}}
          strokeWidth={ 5 }
          strokeColor= 'red'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />

          <Marker 
          // this is your location marker we can make it a blue dot 
          coordinate= {{latitude:location.latitude,longitude:location.longitude}}
          icon="https://www.robotwoods.com/dev/misc/bluecircle.png"


          />
          <Marker 
          // this is the destination marker we can make it a hospital icon
          coordinate= {{latitude:destinationPlace.geometry.location.lat,longitude:destinationPlace.geometry.location.lng}}
          title={'destination'}
          />


              </MapView>
             <View style={styles.Container}>
             <Image style={styles.image} source='../assets/ambulance.png'></Image>
          <View style={styles.middleContainer}>
            <Text style= {styles.type}>
               Amref Ambulance
            </Text>
            <Text style={styles.time}>
                8:03 pm drop off
            </Text>


          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh {7000}
            </Text>
            


          </View>
<View>
 
</View>
            
        </View>
       
        <Button title ='call Now ' style={styles.call} />
        
      </View>




     
    )
}
const styles = StyleSheet.create({

  container:{
    height:'80%',
    resizeMode: 'cover',
  },
call :{
  color:'red',
},
  Image:{   
    paddingTop:40,
    height:350,
    width:'auto',
},
Status:{
  backgroundColor:'white',
  paddingTop: '5%',
  paddingBottom:'5%',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4.84,

  elevation: 5,
},
Title:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'600',
  margin:10,

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
export default EnRoute;