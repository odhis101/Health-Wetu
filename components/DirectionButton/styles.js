import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button:{
             backgroundColor:'#fff',
            margin:10,
            padding:10,
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems:'center',
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.84,
    
            elevation: 5,
    },
    buttonText:{
        fontSize:14,
        color:'grey',
        
        
    },
    Timebar:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:35,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
    
        elevation: 5,
    
    },
    
    })
    export {styles}