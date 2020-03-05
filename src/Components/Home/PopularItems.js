import React, { Component } from 'react'
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native'
import { Card, Button, IconButton } from 'react-native-paper';
import stylesCategory from '../../Styles/Home/Category.styles';
import stylesPopular from '../../Styles/Home/PopularItems.style';
import Icon from 'react-native-ionicons'
import { colors } from '../../Styles/GlobalStyles';

export default class PopularItems extends Component {
    render() {
        return (
            <View>

                <ScrollView
                    horizontal={true}
                    alwaysBounceHorizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >


                    <View style={{ flexDirection: 'row' }}>
                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <ImageBackground
                                        style={stylesPopular.image}
                                        source={require('../../Assets/Home/Popular/eggcurry.jpg')}
                                    >
                                        <View style={stylesPopular.ViewHeart}>
                                            <Icon ios="ios-heart" android="md-heart" size={18} style={{ color: 'red' }} />
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={stylesPopular.TextViewContainer}> 
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={stylesPopular.title}>Egg Curry</Text>
                                        <Text style={stylesPopular.price}>$: 88</Text>
                                    </View>
                                    <Button icon="cart" mode="contained" style={stylesPopular.cartButton} onPress={() => console.log('Pressed')}>
                                       Cart
                                    </Button>
                                </View>
                            </View>
                        </Card>

                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <ImageBackground
                                        style={stylesPopular.image}
                                        source={require('../../Assets/Home/Popular/BeanPasta.jpg')}
                                    >
                                        <View style={stylesPopular.ViewHeart}>
                                            <Icon ios="ios-heart" android="md-heart" size={18} style={{ color: 'red' }} />
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={stylesPopular.TextViewContainer}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={stylesPopular.title}>Bean Pasta</Text>
                                        <Text style={stylesPopular.price}>$: 68</Text>
                                    </View>
                                    <Button icon="cart" mode="contained" style={stylesPopular.cartButton} onPress={() => console.log('Pressed')}>
                                       Cart
                                    </Button>
                                </View>
                            </View>
                        </Card>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <ImageBackground
                                        style={stylesPopular.image}
                                        source={require('../../Assets/Home/Popular/thaali.png')}
                                    >
                                        <View style={stylesPopular.ViewHeart}>
                                            <Icon ios="ios-heart" android="md-heart" size={18} style={{ color: 'red' }} />
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={stylesPopular.TextViewContainer}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={stylesPopular.title}>Full Meals</Text>
                                        <Text style={stylesPopular.price}>$: 108</Text>
                                    </View>
                                    <Button icon="cart" mode="contained" style={stylesPopular.cartButton} onPress={() => console.log('Pressed')}>
                                       Cart
                                    </Button>
                                </View>
                            </View>
                        </Card>

                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <ImageBackground
                                        style={stylesPopular.image}
                                        source={require('../../Assets/Home/Popular/utthapam.jpg')}
                                    >
                                        <View style={stylesPopular.ViewHeart}>
                                            <Icon ios="ios-heart" android="md-heart" size={18} style={{ color: 'red' }} />
                                        </View>
                                    </ImageBackground>
                                </View>

                                <View style={stylesPopular.TextViewContainer}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={stylesPopular.title}>Utthapam</Text>
                                        <Text style={stylesPopular.price}>$: 45</Text>
                                    </View>
                                    <Button icon="cart" mode="contained" style={stylesPopular.cartButton} onPress={() => console.log('Pressed')}>
                                       Cart
                                    </Button>
                                </View>
                            </View>
                        </Card>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
