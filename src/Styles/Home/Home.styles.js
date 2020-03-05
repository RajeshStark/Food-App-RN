import {StyleSheet,Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
   searchbar:{
     width :(DEVICE_WIDTH)/1.2,
     height:'80%',
     color:'#FC4041',
     fontSize:13
   },
  });

  export default styles;
  