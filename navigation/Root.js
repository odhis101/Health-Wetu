
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import WhereAreYouGoingInput from '../pages/WhereAreYouGoingInput';
import SearchResults from '../pages/SearchResults';
import EnRoute from '../pages/EnRoute';
import NewUser from '../pages/NewUser';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import React from 'react';
// Custom drawer content component


const Stack = createStackNavigator();
const RootNavigator = () => {
    return (
        <NavigationContainer  >
           <Stack.Navigator
        initialRouteName="NewUser"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >

         
        
               <Stack.Screen
                name="Home"
                component={Home}
            

              
             />
             <Stack.Screen
                name="WhereAreYouGoingInput"
                component={WhereAreYouGoingInput}
              
             />
              <Stack.Screen
                name="searchResults"
                component={SearchResults}
              
             />
             <Stack.Screen
                name="EnRoute"
                component={EnRoute}
              
             />
             </Stack.Navigator>
             </NavigationContainer>





    );
};

export default RootNavigator;
