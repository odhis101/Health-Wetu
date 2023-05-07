import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Auth } from 'aws-amplify';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const signIn = async () => {
    try {
      await Auth.signIn(username, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  const onPhoneNumberChange = (phoneNumber) => {
    // format phone number to use only digits
    const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '');
    setPhoneNumber(formattedPhoneNumber);
  }

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={onPhoneNumberChange}
        keyboardType="phone-pad"
      />
      <TouchableOpacity onPress={signIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignIn;
