import {StyleSheet,Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Categorystyles = StyleSheet.create({

    rowView:{
      flexDirection:'row',
      margin:5,
      justifyContent:'space-evenly'
    },
   imageContainer:{
    width: ((DEVICE_WIDTH)/2)-20, 
    height: ((DEVICE_WIDTH)/2)-20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10 
   },
   imagebackground:{
       width: ((DEVICE_WIDTH)/2)-20,
       height: ((DEVICE_WIDTH)/2)-20,
       borderWidth:1,
       borderRadius:5,
       opacity:0.6,
       backgroundColor:"#2D2D2D"
   
   },
   imagetext:{
       fontSize:18,
       color:'#fff',
       padding:3,
       fontWeight:'bold'
     
     
   }
  });

  export default Categorystyles;
  