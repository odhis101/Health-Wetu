import { StyleSheet } from 'react-native';
import { styles } from "./styles";
import { TextInput, TouchableOpacity, Text, View,TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DirectionButton({ text, onPress,arrowdirection,size,navigation}) {
    const handlePress = () => {
        //navigation.goBack();
    }
  return (
        <>
            <TouchableWithoutFeedback  onPress={navigation}>
            <View style ={styles.Timebar}>
            <AntDesign name ={arrowdirection} size ={size} color={'red'}></AntDesign>         
            </View>
            </TouchableWithoutFeedback>
        </>
  )
}
