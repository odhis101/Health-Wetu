import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

const OurData = (props) => {
   console.log('styles')
    return(
       
        <View style ={styles.containerss}>
        <Image 
            style= {styles.image}
            source={require( '../../assets/face.jpg' )}
            />
            <View style ={styles.containers}>
            <Text style= {styles.title}> Medical Id</Text>
            <Text style={styles.border}></Text>
            <View style ={styles.credentials}>
                <Text style= {styles.first}> Name: Joshua Odhiambo </Text>
                <Text style={styles.horizontalBorder}></Text>
                <Text style= {styles.second}> Age:  21</Text>
                
                
                

            </View>
             <View style ={styles.credentials}>
                <Text style= {styles.first}> Weight: 68 kgs </Text>
                <Text style={styles.horizontalBorder}></Text>
                <Text style= {styles.second}> Height:  182cm</Text>
                
                
                

            </View>
            <View style ={styles.credentials}>
                <Text style= {styles.first}> Allergies: None </Text>
                <Text style={styles.horizontalBorder}></Text>
                <Text style= {styles.second}> </Text>
          
                
                

            </View>
            
            </View>
        </View>
        
 
    )
}
const styles = StyleSheet.create({

    containerss:{

    margin: 'auto',
    backgroundColor:'white',
    width:'100%',
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 6.84,

    elevation: 15,
   },
   containers:{
    
    backgroundColor:'white',
    margin:'5%',
    width:'80%',
    height: '100%',
   
   },
   image:{
    marginTop: 10,
    marginLeft:20,
    height:92,
    width:92,
    borderRadius:150
   },
   title:{
    marginTop: 15,
    fontSize:25,
    fontWeight:'600',
   },
   border:{
    marginLeft:10,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    height:3,
    width:50,
    backgroundColor:'#ED1918'
},
horizontalBorder:{
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    height:'2%',
    width:2,
    backgroundColor:'#ED1918'
},
credentials:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
},

});
export default OurData