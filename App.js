import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./pages/Home"
import WhereAreYouGoingInput from "./pages/WhereAreYouGoingInput"
import SearchResults from "./pages/SearchResults"
import EnRoute from './pages/EnRoute';



export default function App() {
  return (
   <SearchResults/>
  );
}


