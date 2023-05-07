import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Home from '../pages/Home';
import WhereAreYouGoingInput from '../pages/WhereAreYouGoingInput';
import SearchResults from '../pages/SearchResults';
import EnRoute from '../pages/EnRoute';

import NewUser from '../pages/NewUser';
import SignUp from '../pages/Signup';
import Login from '../pages/Login';
import React from 'react';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Custom drawer content component
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const RootNavigator = () => {
    return (
        <NavigationContainer  >
           <Stack.Navigator
        initialRouteName="NewUser"
        screenOptions={{
          headerShown: false
        }}
      >
                   <Stack.Screen
                  name="NewUser"
                  component={NewUser}
                  />
                   <Stack.Screen
                  name="Login"
                  component={Login}
                  />
                   <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  />
                  
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
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="WhereAreYouGoingInput" component={WhereAreYouGoingInput} />
        <Drawer.Screen name="SearchResults" component={SearchResults} />
        <Drawer.Screen name="EnRoute" component={EnRoute} />
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
