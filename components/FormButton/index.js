import { StyleSheet } from 'react-native';
import { styles } from "./styles";
import { TextInput, TouchableOpacity, Text, View } from 'react-native';

const FormButton = ({text,textValue,textOnchange}) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={text}
        placeholderTextColor="black"
        keyboardType="default"
        autoCapitalize="none"
        value={textValue}
        onChangeText={textOnchange}

      />
    );
  };
export default FormButton;