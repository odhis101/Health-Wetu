import { StyleSheet, Text, Image, TouchableOpacity, View,ScrollView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import OurData from "health-wetu/components/ourData/ourData.js"
import OurButton from "health-wetu/components/ourButton/ourButton.js"
import ModuleButton from "health-wetu/components/moduleButton/moduleButton.js"
const Home =()=> {
  /*
  const [users, setUsers] = useState();
  
  useEffect(()  => {
      const fetchData = async () => {
          const userInfo = await Auth.currentAuthenticatedUser();
       
          setUsers(userInfo.attributes.sub);
      
      }
      fetchData();
  },[] )
// this is a function to print the json data from auth aws 
  const onSubmit = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      console.log(userInfo.getUsername())
  }
         
    
 
  const pressHandler =() =>{
      navigation.navigate('destination');
      
  }
  */
 console.log('first log ever ')
    
    return( 
    <ScrollView>
         <View styles={styles.container}>
             <Image 
            style= {styles.Image}
            source={require( '../../assets/HealthWetu.png' )}
            />
            <OurButton text='Where are you ' /> 
            <ModuleButton text = 'calling for a friend '/>
            <OurData/>
             </View>

    
  
    </ScrollView>
    )
}

export default Home; 