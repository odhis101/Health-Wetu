import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View,TextInput,Button } from 'react-native';
const UserData = () => {
return (
<View>
    <View style={styles.redDiv}>
        <Text>Name</Text>      
    </View>
    <View style={styles.circle}>
        <Text>Surname</Text>
    </View>
    <View style={styles.Container}>
        <Text>data</Text>
    </View>
</View>


);

}
const styles = StyleSheet.create({
redDiv: {
    backgroundColor: 'red',
    width: '100%',
    height: "40%",
    justifyContent: 'center',
    alignItems: 'center',
},
circle: {
    backgroundColor: 'blue',
    width: '40',
    height: "40",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "100%",
},



})

export default UserData;