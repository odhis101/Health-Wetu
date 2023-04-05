import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput, Button, ScrollView} from 'react-native';

const UserData = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.one}>
  
        <Text style={{color: 'white', fontSize: 15, textAlign: 'center', marginTop: 95 , marginLeft:"15%" ,fontWeight: 'bold'}}>Joshua Odhiambo</Text>
        <Text style={{color: 'white', fontSize: 15, textAlign: 'center' , marginLeft:"5%",fontWeight: 'bold'}}>21 years old</Text>
      
      </View>
      <View style={styles.two}>
        <View style = {styles.twoContainer}> 
        <View> 
        <Text style = {{fontSize:20}}>
  <Text style={styles.titleData}>Diagno</Text>
  sis</Text>
    </View>
        <Text style = {{color :'#707070', marginTop: 5}}>Help doctors know what’s going on</Text>
        <View style = {styles.medicalhistory}> 
        <Text style = {{fontSize:20, marginTop:"5%"}}>
  <Text style={styles.titleData}>Medic</Text>
  al History</Text>

  <View>
    <View style={{  borderBottomColor: '#707070',
    borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Diabetes</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>8 months ago</Text>
    </Text>
    </View>
    <Text> 
    Diagnosed a few months back, extra large heart with 
probable heart attack
    </Text>
    </View>
    <View style={{  borderBottomColor: '#707070',
    borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Diabetes</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>8 months ago</Text>
    </Text>
    </View>
    <Text> 
    Diagnosed a few months back, extra large heart with 
probable heart attack
    </Text>

    </View>
    </View>
    <View> 
        
    </View>
    
    <View style = {styles.medicalhistory}> 
        <Text style = {{fontSize:20, marginTop:"5%"}}>
  <Text style={styles.titleData}>Bio D</Text>
  ata</Text>

  <View style={styles.bioData}>
    <View style={{  borderBottomColor: '#707070' , borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Blood Type</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>O+</Text>
    </Text>
    </View>
    </View>
  </View>

  <View style={styles.bioData}>
    <View style={{  borderBottomColor: '#707070' , borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Blood Type</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>O+</Text>
    </Text>
    </View>
    </View>
  </View>

  <View style={styles.bioData}>
    <View style={{  borderBottomColor: '#707070' , borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Blood Type</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>O+</Text>
    </Text>
    </View>
    </View>
  </View>

  <View style={styles.bioData}>
    <View style={{  borderBottomColor: '#707070' , borderBottomWidth: 1, paddingBottom: 20, marginTop : 10}}>
    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
    <Text>
      <Text style={styles.historyDetailsTitle}>Blood Type</Text>
    </Text>
    <Text>
      <Text style={styles.historyDetailsTitle}>O+</Text>
    </Text>
    </View>
    </View>
  </View>






  </View>

        </View>
        
        </View>
    
       
      </View>
      <View style={styles.picture}>
        <Image
          style={styles.image}
          source={require('../../assets/face.jpg')}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  historyDetailsTitle: {
    fontWeight: 'bold', 
    fontSize: 15
  },
  bioData: {
    margin: 10
  },

  titleData: {
     textDecorationLine: 'underline',
    color: 'red',
    

  },
  one: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    marginBottom: -50,
  },
  two: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
    twoContainer: {
   
    padding: 10,   
    marginTop: 80,
    width: '100%',
    },
  picture: {
    position: 'absolute',
    left: '20%',
    top: '28%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 150,
  },
});

export default UserData;