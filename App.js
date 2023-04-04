import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./pages/Home"
import WhereAreYouGoingInput from "./pages/WhereAreYouGoingInput"
import SearchResults from "./pages/SearchResults"
import EnRoute from './pages/EnRoute';
import UserData from './pages/userData';
import Root from 'health-wetu/navigation/Root.js';
 
//import Amplify, { Auth } from 'aws-amplify';
//import awsconfig  from './src/aws-exports';

//import { withAuthenticator } from 'aws-amplify-react-native'
//Auth.configure(awsconfig);



const App = () => {
  return (
   <UserData/>
  );
}
export default App;

