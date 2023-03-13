import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    first:{
        width:200,
        

    },
    second:{
        width:150,
        

    },
    containerss:{

    margin: 'auto',
    backgroundColor:'white',
    width:'100%',
    height: 1000,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 6.84,

    elevation: 15,
   },
   containers:{
    
    backgroundColor:'white',
    margin:'5%',
    width:'80%',
    height: '100%',
   
   },
   Image:{
    marginTop: 10,
    marginLeft:20,
    height:92,
    width:92,
    borderRadius:150
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
