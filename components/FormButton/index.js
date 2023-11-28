import { StyleSheet } from 'react-native';
import { styles } from "./styles";
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import {useState} from 'react';

const FormButton = ({text,textValue,textOnchange}) => {
  const [hidePassword, setHidePassword] = useState(true);
    return (
      <>
<View style={styles.inputView}>
    <TextInput
        style={styles.input}
        placeholder={text}
        placeholderTextColor="#333"
        keyboardType="default"
        autoCapitalize="none"
        value={textValue}
        onChangeText={textOnchange}
        secureTextEntry={text === 'Password' ? hidePassword : false}
    />
    {text === 'Password' && textValue.length > 0 && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>{hidePassword ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
    )}
</View>


      </>
      
    );
  };
export default FormButton;