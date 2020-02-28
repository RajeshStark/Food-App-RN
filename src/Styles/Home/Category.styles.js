import {StyleSheet,Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const Categorystyles = StyleSheet.create({
   imageContainer:{
    width: 100, 
    height:100, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-end', 
    marginBottom: 10 ,
   
   },
   imagebackground:{
       width:100,
       height:100,
       borderWidth:1,
       borderRadius:5,
   
   },
   imagetext:{
       fontSize:14,
       color:'#fff',
       padding:3,
       borderRadius:5,
       backgroundColor:'#2D2D2D',
       opacity:0.8,
       padding:5
   }
  });

  export default Categorystyles;
  