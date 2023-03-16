import { StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    Image:{
        
   
        height:300,
        width:'100%',
    },
    first:{
        width:200,
    },
    second:{
        width:150,
    },
   
   container:{
    border:'1px solid red',
   },
   containers:{
    
    backgroundColor:'white',
    margin:'5%',
    width:'80%',
    height: '100%',
   
   },
  
   title:{
    marginTop: 15,
    fontSize:25,
    fontWeight:'600',
   },
   border:{
    marginLeft:10,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    height:3,
    width:50,
    backgroundColor:'#ED1918'
  },
  horizontalBorder:{
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    height:'2%',
    width:2,
    backgroundColor:'#ED1918'
  },
  credentials:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
  },
  
  });
  export {styles} 