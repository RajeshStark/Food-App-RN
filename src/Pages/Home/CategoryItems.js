import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Appbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LightBox from './LightBox';

// function CategoryItems ({ navigation: { goBack } }) {
export class CategoryItems extends Component {

    render() {
        return (
            <View>
                <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Biryani"

                    />

                </Appbar.Header>
                <ScrollView>
                    <View style={{ marginBottom: 50 }}>
                        <View>

                            <Card>
                                <LightBox />
                                <Card.Content>

                                    <Title>Paneer Biryani</Title>
                                    <Paragraph> Lorem ipsun simply a dummy TextLorem ipsun simplyem ipsun simsy a dummy TextLorem ipsun simply a dummy Text</Paragraph>

                                </Card.Content>
                                <Card.Actions>
                                    <Button
                                        onPress={() => this.props.navigation.navigate("OrderPage")}
                                    >Add To Cart</Button>
                                </Card.Actions>
                            </Card>
                        </View>


                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default function (props) {
    const navigation = useNavigation();

    return <CategoryItems {...props} navigation={navigation} />;
}