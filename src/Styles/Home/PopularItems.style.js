import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const Popularstyles = StyleSheet.create({
    ListCardView:{
        borderRadius: 5,
        margin: 5,
        padding:10,
        alignItems:'center',
        borderColor:'#000',
        borderWidth:0.2
        
    },
 
    image:{
        width: DEVICE_WIDTH/2.5,
        height:DEVICE_WIDTH/2.5,
        borderRadius:5,
        alignItems:'flex-end'

    },
    ViewHeart:{
        width: 30, 
        height: 30, 
        backgroundColor: '#fff', 
        borderRadius: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    TextViewContainer: {
        width: DEVICE_WIDTH/2.5
      
    },
    title: {
        fontSize: 15,// <-- Title 
        fontWeight: 'bold',// <-- Title 
    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    price:{
        fontSize:14,
        color:'#FC4041',
        alignItems:'baseline'
    },
    cartButton:{
        backgroundColor:'#FC4041',
        marginTop:10
    }


});

export default Popularstyles;
