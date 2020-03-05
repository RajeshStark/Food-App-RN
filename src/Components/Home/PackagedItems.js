import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Card, Title, Paragraph } from 'react-native-paper'


import stylesPopular from '../../Styles/Home/PopularItems.style';
import { ScrollView } from 'react-native-gesture-handler';

export class PackagedItemsSample extends Component {

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                
                <Card>
                <View style={{ width:(DEVICE_WIDTH)-40,margin:10,borderWidth:0.2,borderRadius:5}} >
                    <Card.Cover
                     style={{width:(DEVICE_WIDTH)-40,borderWidth:0.2,borderRadius:5}}
                    source={require('../../Assets/Packaged/PackagedHomeSample/tomatoChutney.jpg')} />
                    <Card.Content>
                        <Title>Tomato Chutney</Title>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ... The first line of Lorem Ipsum</Text>
                    </Card.Content>
                    <Card.Actions style={{width:(DEVICE_WIDTH)-40}}>
                    {/* <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                       Add To Cart
                    </Button>
                    <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                      Learn More
                    </Button> */}
                       <Button style={{ color:"#FC4041"}}>Add To Cart</Button>
                       <Button style={{ color:"#FC4041"}}>Know More</Button>
                    </Card.Actions>
                    </View>
                </Card>

                <Card>
                <View style={{ width:(DEVICE_WIDTH)-40,margin:10,borderWidth:0.2,borderRadius:5}} >
                    <Card.Cover
                     style={{width:(DEVICE_WIDTH)-40,borderWidth:0.2,borderRadius:5}}
                    source={require('../../Assets/Packaged/PackagedHomeSample/Sauces.jpg')} />
                    <Card.Content >
                        <Title>Sauces</Title>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ... The first line of Lorem Ipsum</Text>
                    </Card.Content>
                    <Card.Actions style={{width:(DEVICE_WIDTH)-40}}>
                    {/* <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                       Add To Cart
                    </Button>
                    <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                      Learn More
                    </Button> */}
                       <Button style={{ color:"#FC4041"}}>Add To Cart</Button>
                       <Button style={{ color:"#FC4041"}}>Know More</Button>
                    </Card.Actions>
                    </View>
                </Card>

                <Card>
                <View style={{ width:(DEVICE_WIDTH)-40,margin:10,borderWidth:0.2,borderRadius:5}} >
                    <Card.Cover
                     style={{width:(DEVICE_WIDTH)-40,borderWidth:0.2,borderRadius:5}}
                    source={require('../../Assets/Packaged/PackagedHomeSample/homemadeSpices.jpg')} />
                    <Card.Content >
                        <Title>Home Made Spices</Title>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ... The first line of Lorem Ipsum</Text>
                    </Card.Content>
                    <Card.Actions style={{width:(DEVICE_WIDTH)-40}}>
                    {/* <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                       Add To Cart
                    </Button>
                    <Button icon="cart" mode="contained" style={{ backgroundColor:"#FC4041",justifyContent:'center',alignItems:'center'}} onPress={() => console.log('Pressed')}>
                                      Learn More
                    </Button> */}
                       <Button style={{ color:"#FC4041"}}>Add To Cart</Button>
                       <Button style={{ color:"#FC4041"}}>Know More</Button>
                    </Card.Actions>
                    </View>
                </Card>

            </ScrollView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

export default function (props) {
    const navigation = useNavigation();

    return <PackagedItemsSample {...props} navigation={navigation} />;
}