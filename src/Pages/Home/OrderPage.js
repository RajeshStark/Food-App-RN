import React, { useState } from 'react'
import { Text, View, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Button, IconButton, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

class OrderPage extends React.Component {



    constructor() {
        super();
        this.state = {
            count: 1,
        
        };
    }

    _incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    _decrementCount = () => {

        var Count = this.state.count;
        if (Count !== 1) {
            this.setState(prevState => ({

                count: prevState.count - 1
            }));
        }
        else {
            this.state.Count = 1
        }

    }

    render() {

        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center' }}>

                    <ImageBackground
                        source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
      
                        imageStyle={{ width: DEVICE_WIDTH, height: '100%' }}
                        style={{ width: DEVICE_WIDTH, height: (DEVICE_WIDTH) / 1.5 }}

                    >
                       
                        <Appbar.BackAction
                            onPress={() => this.props.navigation.goBack()}
                         />

                    </ImageBackground> 

                    <View style={{
                        marginTop: -40,
                        width: (DEVICE_WIDTH) - 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: '#fff'
                    }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 22, padding: 10, marginTop: 10 }}>Paneer Biryani</Text>
                            <Text style={{ fontSize: 18, padding: 10, marginTop: 10, color: 'red' }}>Price: 999</Text>
                        </View>
                        <View>
                            <Paragraph style={{ padding: 10 }}>It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</Paragraph>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ padding: 10, fontSize: 16 }}>You Can Customize Your Food</Text>
                        </View>
                        <Button mode="contained" onPress={() => console.log('Pressed')}>
                            Customize
                            </Button>

                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                         
                                <IconButton
                                  size={30}
                                    icon="minus"
                                    onPress={() => this._decrementCount()}
                                    
                                />
                                                      
                                <Text style={{fontSize:22}}>{this.state.count}</Text>
                                <IconButton
                                   size={30}
                                    icon="plus"
                                    onPress={() => this._incrementCount()}
                            
                                />
                            </View>

                            <Button icon="cart" mode="contained" onPress={() => console.log('Pressed')}>
                                Cart
                            </Button>

                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

export default function page(props) {
    const navigation = useNavigation();

    return <OrderPage {...props} navigation={navigation} />;
}