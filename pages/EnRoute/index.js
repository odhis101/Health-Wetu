import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable,Button} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import {TextInput} from 'react-native-gesture-handler';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const EnRoute = (props) => {
const confirm = () => {
  console.warn('confirm')
}
const destination ={
  latitude: 37.78825,
  longitude: -122.4324,
}
const origin ={
  latitude: 38.78825,
  longitude: -122.4324,
}
    return(
        <View style={styles.container}>
            <View style ={styles.Status}>
              <Text style= {styles.Title}>Ambulance En-route</Text> 
              <Text style= {styles.SubTitle}>From: Conquest</Text>
              <Text style= {styles.SubTitle}>To: Getrudes</Text>
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
          destination= {{latitude:-1.2921,longitude:36.82199}}
          strokeWidth={ 5 }
          strokeColor= 'black'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />

          <MapViewDirections
          // this is the direction from your location to the closest hospital 
          origin={{latitude:-1.2921,longitude:36.8219}}
          destination= {{latitude:-2.2921,longitude:36.8219}}
          strokeWidth={ 5 }
          strokeColor= 'red'
          apikey={'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU'}
          />

          <Marker 
          // this is your location marker we can make it a blue dot 
          coordinate= {{latitude:-1.2921,longitude:36.8219}}
          icon="https://www.robotwoods.com/dev/misc/bluecircle.png"


          />
          <Marker 
          // this is the destination marker we can make it a hospital icon
          coordinate= {{latitude:-2.2921,longitude:36.8219}}
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