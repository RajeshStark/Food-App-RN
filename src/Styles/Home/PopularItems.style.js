import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const Popularstyles = StyleSheet.create({
    ListCardView:{
        flexDirection: 'row',
        borderRadius: 5,
        margin: 10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    ListCard: {
        flexDirection: 'row',
        borderRadius: 5,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    TextViewContainer: {
        width: ((DEVICE_WIDTH) / 3) * 2,
        margin: 5

    },
    title: {
        fontSize: 18,// <-- Title 
        fontWeight: 'bold',// <-- Title 
    },
    discription: {
       color:'#808080'
    }


});

export default Popularstyles;
