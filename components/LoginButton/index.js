import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles";
import DirectionButton from '../DirectionButton/index.js';

const LoginButton = ({ onPress,text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
