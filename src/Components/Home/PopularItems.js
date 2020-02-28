import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { TouchableRipple, Card } from 'react-native-paper';
import stylesCategory from '../../Styles/Home/Category.styles';
import stylesPopular from '../../Styles/Home/PopularItems.style';

export default class PopularItems extends Component {
    render() {
        return (
            <View>

                <ScrollView>
                    <View>
                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <Image
                                        style={stylesCategory.imagebackground}
                                        source={require('../../Assets/CategoryImages/biryani.jpg')}
                                    />
                                </View>
                                <View style={stylesPopular.TextViewContainer}>
                                    <Text style={stylesPopular.title}>Biryani</Text>
                                    <Text style={stylesPopular.discription}>
                                        Lorem ipsun simply a dummy TextLorem ipsun simplyem ipsun simsy a dummy TextLorem ipsun simply a dummy Text
                                </Text>
                                </View>
                            </View>
                        </Card>

                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <Image
                                        style={stylesCategory.imagebackground}
                                        source={require('../../Assets/CategoryImages/Sambar.jpg')}
                                    />
                                </View>
                                <View style={stylesPopular.TextViewContainer}>
                                    <Text style={stylesPopular.title}>Sambar</Text>
                                    <Text style={stylesPopular.discription}>
                                        Lorem ipsun simply a dummy TextLorem ipsun simplyem ipsun simsy a dummy TextLorem ipsun simply a dummy Text
                                </Text>
                                </View>
                            </View>
                        </Card>

                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <Image
                                        style={stylesCategory.imagebackground}
                                        source={require('../../Assets/CategoryImages/Pickle.jpg')}
                                    />
                                </View>
                                <View style={stylesPopular.TextViewContainer}>
                                    <Text style={stylesPopular.title}>Pickle</Text>
                                    <Text style={stylesPopular.discription}>
                                        Lorem ipsun simply a dummy TextLorem ipsun simplyem ipsun simsy a dummy TextLorem ipsun simply a dummy Text
                                </Text>
                                </View>
                            </View>
                        </Card>

                        <Card >
                            <View style={stylesPopular.ListCardView}>
                                <View>
                                    <Image
                                        style={stylesCategory.imagebackground}
                                        source={require('../../Assets/CategoryImages/chutney.jpg')}
                                    />
                                </View>
                                <View style={stylesPopular.TextViewContainer}>
                                    <Text style={stylesPopular.title}>Chutney</Text>
                                    <Text style={stylesPopular.discription}>
                                        Lorem ipsun simply a dummy TextLorem ipsun simplyem ipsun simsy a dummy TextLorem ipsun simply a dummy Text
                                </Text>
                                </View>
                            </View>
                        </Card>
            
                    </View>
                </ScrollView>
            </View>
        )
    }
}
