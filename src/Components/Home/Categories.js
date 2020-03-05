import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/Home/Category.styles';


export class Categories extends Component {
    render() {
        // const { navigation } = this.props;
        return (
            <View>

                <ScrollView
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >

                    <View style={{ margin: 5 }}>
                        <TouchableOpacity
                           
                             onPress={()=> this.props.navigation.navigate('CategoriyItems')}
                        >
                        <ImageBackground
                            source={require('../../Assets/Home/CategoryImages/biryani.jpg')}
                            style={styles.imageContainer}
                            imageStyle={styles.imagebackground}
                            
                        >
                            <Text style={styles.imagetext}>Biryani</Text>
                        </ImageBackground>

                        </TouchableOpacity>
                       
                    </View>

                    <View style={{ margin: 5 }}>
                        <ImageBackground
                            source={require('../../Assets/Home/CategoryImages/Sambar.jpg')}
                            style={styles.imageContainer}
                            imageStyle={styles.imagebackground}

                        >
                            <Text style={styles.imagetext}>Sambar</Text>
                        </ImageBackground>
                    </View>

                    <View style={{ margin: 5 }}>
                        <ImageBackground
                            source={require('../../Assets/Home/CategoryImages/Pickle.jpg')}
                            style={styles.imageContainer}
                            imageStyle={styles.imagebackground}

                        >
                            <Text style={styles.imagetext}>Pickle</Text>
                        </ImageBackground>
                    </View>

                    <View style={{ margin: 5 }}>
                        <ImageBackground
                            source={require('../../Assets/Home/CategoryImages/chutney.jpg')}
                            style={styles.imageContainer}
                            imageStyle={styles.imagebackground}

                        >
                            <Text style={styles.imagetext}>Chutney</Text>
                        </ImageBackground>
                    </View>

                    <View style={{ margin: 5 }}>
                        <ImageBackground
                            source={require('../../Assets/Home/CategoryImages/Dosa.png')}
                            style={styles.imageContainer}
                            imageStyle={styles.imagebackground}

                        >
                            <Text style={styles.imagetext}>Dosa</Text>
                        </ImageBackground>
                    </View>


                </ScrollView>
            </View>
        )
    }
}


export default function(props) {
    const navigation = useNavigation();
  
    return <Categories {...props} navigation={navigation} />;
  }