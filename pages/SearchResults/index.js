import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput,Button,Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from "react-native-vector-icons/Ionicons"
import OurButton from "health-wetu/components/ourButton/ourButton.js"

const SearchResults = () =>


{
return(

    // you need to add the navigation
    <View >
      <View style={styles.Header}>
        <OurButton text='Your Loaction ' />  
        <OurButton text='Destination' />  
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
          //coordinate={{latitude:originPlace.details.geometry.location.lat,longitude: originPlace.details.geometry.location.lng}}
          // this is the ambulance location which is the coordinates will also be dynamically located 
            coordinate={{latitude:-6.2921,longitude:36.8219}} 
            // this will be where the closest ambulance is located 
        >
          <Image source={require('../../assets/ambulance.png')} style={{width:60,height:60,resizeMode:'contain'}}/>
          </Marker>
          <MapViewDirections
          // this is the route from the ambulance to your location
          origin={{latitude:-6.2921,longitude:36.8219}}
          destination= {{latitude:-2.2921,longitude:36.8219}}
          strokeWidth={ 5 }
          strokeColor= 'black'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />

          <MapViewDirections
          // this is the direction from your location to the closest hospital
          // origin value will be dynamically determined based on your location from the server 
          origin={{latitude:-1.2921,longitude:36.8219}}
          destination= {{latitude:-2.2921,longitude:36.8219}}
          strokeWidth={ 5 }
          strokeColor= 'red'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />
          <Marker 
          // this is your loaction 
          coordinate= {{latitude:-1.2921,longitude:36.8219}}
          icon="https://www.robotwoods.com/dev/misc/bluecircle.png"


          />
          <Marker 
          // this is the hospital  location
          coordinate= {{latitude:-2.2921,longitude:36.8219}}
          title={'destination'}
          />
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
                8:03 pm drop off
            </Text>

          </View>
       
          <View style={styles.rightContainer}>
            <Ionicons name={'pricetag'} size ={18} color={'green'} />
            <Text style={styles.price}> 
                ksh 1000
            </Text>


          </View>
            
        </View>
      
      <Pressable  style={styles.confirm}> 
          <Text style={styles.text}>
            Confirm Requests
          </Text>
         
        </Pressable>
    </View>
)
}
const styles = StyleSheet.create({
  Header:{
    marginTop:30,
    
  },
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