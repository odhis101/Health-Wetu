import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./pages/Home"
import WhereAreYouGoingInput from "./pages/WhereAreYouGoingInput"
import SearchResults from "./pages/SearchResults"
import EnRoute from './pages/EnRoute';
import UserData from './pages/userData';
import Root from 'health-wetu/navigation/Root.js';
import NewUser from './pages/NewUser';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { SafeAreaView } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Toast from 'react-native-toast-message'; // import the Toast component

import React from 'react';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
  
        <Root />
        <StatusBar style="auto" />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
