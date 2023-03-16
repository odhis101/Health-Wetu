import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import WhereAreYouGoingInput from '../pages/WhereAreYouGoingInput';
import SearchResults from '../pages/SearchResults';
import EnRoute from '../pages/EnRoute';
import React from 'react';

const Stack = createStackNavigator();
const RootNavigator = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator  
             defaultScreenOptions={Home}>
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