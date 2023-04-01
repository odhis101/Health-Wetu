import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, TextInput, Button } from 'react-native';

const UserData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
  
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', marginTop: 80 , marginLeft:"20%"}}>Joshua Odhiambo</Text>
        <Text style={{color: 'white', fontSize: 18, textAlign: 'center', marginTop: 10 , marginLeft:"9%"}}>21 years old</Text>
      
      </View>
      <View style={styles.two}>
        <View style = {styles.twoContainer}> 
        <Text>Medical Id</Text>
        <Text>Weight: 68 kgs</Text>
        </View>
       
      </View>
      <View style={styles.picture}>
        <Image
          style={styles.image}
          source={require('../../assets/face.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 500,
  },
  one: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    marginBottom: -50,
  },
  two: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
    twoContainer: {
    width: '100%',
    height: 100,
    margin:'5%'
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