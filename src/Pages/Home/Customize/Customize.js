import React, { Component } from 'react';
import { Text, View, ImageBackground, Dimensions } from 'react-native';
import { Appbar, IconButton, Checkbox, Divider, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { Rating, PricingCard } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// import BottomSheet from 'reanimated-bottom-sheet'
import { ScrollView } from 'react-native-gesture-handler';


export default class Customize extends Component {
    state = {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,

        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,

        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        visible: false,
    };


    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    // Increment Decrement
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

    //Dialogue

    _showDialog = () => this.setState({ visible: true });

    _hideDialog = () => this.setState({ visible: false });



    render() {

        const { checked1 } = this.state;
        const { checked2 } = this.state;
        const { checked3 } = this.state;
        const { checked4 } = this.state;

        const { checked5 } = this.state;
        const { checked6 } = this.state;
        const { checked7 } = this.state;
        const { checked8 } = this.state;

        const { checked9 } = this.state;
        const { checked10 } = this.state;
        const { checked11 } = this.state;
        const { checked12 } = this.state;
        return (
            <ScrollView>
                <View style={{ backgroundColor: "#fff" }}>


                    <ImageBackground
                        // source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                        source={require('../../../Assets/Home/CategoryImages/paneer-biryani.jpg')}
                        imageStyle={{ width: DEVICE_WIDTH, height: (DEVICE_WIDTH) / 1.8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderWidth: 1 }}
                        style={{ width: DEVICE_WIDTH, height: (DEVICE_WIDTH) / 1.8, borderWidth: 0.1 }}

                    >
                        <IconButton
                            icon="arrow-left"
                            color="#000"
                            size={25}
                            onPress={() => this.props.navigation.goBack()}
                        />

                    </ImageBackground>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{
                            marginTop: -80,
                            height: (DEVICE_WIDTH) / 2,
                            width: (DEVICE_WIDTH) - 60,
                            borderRadius: 5,
                            backgroundColor: '#fff',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.20,
                            shadowRadius: 1.41,

                            elevation: 2,

                        }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontSize: 20, padding: 10, marginTop: 10 }}>Paneer Biryani</Text>
                                <View>
                                    <Text style={{ fontSize: 18, padding: 10, marginTop: 10, color: 'red' }}>$: 999</Text>
                                    <Rating imageSize={10} readonly startingValue={4.5} />
                                </View>


                            </View>
                            <View>
                                <Paragraph style={{ padding: 10 }}>It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</Paragraph>
                            </View>

                        </View>
                    </View>


                    <View>
                        <Text style={{ fontSize: 18, padding: 10, marginTop: 10 }}>Choose Your Favorite Ingredient </Text>

                        <View>

                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, padding: 10, marginTop: 10, width: DEVICE_WIDTH / 3.5 }}>Rice:-</Text>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/12/how-to-cook-basmati-rice-in-a-pot-1-500x500.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked1 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked1: !checked1 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Basmati</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://img1.exportersindia.com/product_images/bc-full/dir_191/5712812/sona-masoori-rice-1528522765-3960455.jpeg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked2 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked2: !checked2 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Sona Masoori</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://www.onceuponachef.com/images/2013/12/basmati-rice-850x646.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked3 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked3: !checked3 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>White</Text>
                                    </View>

                                </View>

                            </ScrollView>
                            <Divider style={{ marginLeft: 20, width: (DEVICE_WIDTH) - 40, backgroundColor: "#C0C0C0" }} />
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, padding: 10, marginTop: 10,  width: DEVICE_WIDTH / 3.5 }}>Vege{"\n"}tables:-</Text>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1200px-Bright_red_tomato_and_cross_section02.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked5 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked5: !checked5 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Tomato</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://dictionary.cambridge.org/images/thumb/onion_noun_001_11239.jpg?version=5.0.73' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked6 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked6: !checked6 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Onion</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://gbc-cdn-public-media.azureedge.net/img83268.1426x713.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked7 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked7: !checked7 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Beans</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/81459bqY2HL._SX679_.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked8 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked8: !checked8 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Potato</Text>
                                    </View>

                                </View>

                            </ScrollView>
                            <Divider style={{ marginLeft: 20, width: (DEVICE_WIDTH) - 40, backgroundColor: "#C0C0C0" }} />
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, padding: 10, marginTop: 10,  width: DEVICE_WIDTH / 3.5 }}>Spices:-</Text>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://5.imimg.com/data5/JP/YF/MY-30741717/black-coffee-beans-500x500.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked9 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked9: !checked9 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Pepper</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://d6prv7be4nrvy.cloudfront.net/wp-content/uploads/chilli-pepper.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked10 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked10: !checked10 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Chilli</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2017/09/cloves.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked11 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked11: !checked11 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Cloves</Text>
                                    </View>

                                    <View style={{ padding: 5 }}>
                                        <ImageBackground
                                            source={{ uri: 'https://www.thespruceeats.com/thmb/BJbsB8MT0VS_OBA0mIqU_L4bg3U=/2215x1661/smart/filters:no_upscale()/cardamom-2500-56a2101a5f9b58b7d0c62aae.jpg' }}
                                            imageStyle={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, borderRadius: 5 }}
                                            style={{ width: DEVICE_WIDTH / 4, height: (DEVICE_WIDTH) / 4, alignItems: 'flex-end' }}
                                        >
                                            <Checkbox
                                                status={checked12 ? 'checked' : 'unchecked'}
                                                onPress={() => { this.setState({ checked12: !checked12 }); }}
                                            />
                                        </ImageBackground>
                                        <Text style={{ fontSize: 12, padding: 5 }}>Cardamom</Text>
                                    </View>

                                </View>

                            </ScrollView>


                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>

                                <IconButton
                                    size={30}
                                    icon="minus"
                                    onPress={() => this._decrementCount()}

                                />

                                <Text style={{ fontSize: 22 }}>{this.state.count}</Text>
                                <IconButton
                                    size={30}
                                    icon="plus"
                                    onPress={() => this._incrementCount()}

                                />
                            </View>

                            <Button icon="check" mode="contained" onPress={this._showDialog}>
                                Check Out
                            </Button>
                            <View>
                                <Portal>
                                    <Dialog
                                        visible={this.state.visible}
                                        onDismiss={this._hideDialog}>
                                        <Dialog.Title>You have selected</Dialog.Title>
                                        <Dialog.Content>
                                            <Paragraph>Rice: Basmati</Paragraph>
                                            <Paragraph>Vegetables: Tomato, Onion</Paragraph>
                                            <Paragraph>Biryani type: Paneer Biryani</Paragraph>
                                            <Paragraph>Spices: Mirchi, Cloves</Paragraph>
                                        </Dialog.Content>
                                        <Dialog.Actions>
                                            <Button onPress={this._hideDialog}>Change</Button>
                                            <Button icon="cart" mode="contained" onPress={this._hideDialog}>Proceed To Cart</Button>
                                        </Dialog.Actions>
                                    </Dialog>
                                </Portal>
                            </View>

                        </View>

                    </View>

                </View>
            </ScrollView>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;


// export default function (props) {
//     const navigation = useNavigation();

//     return <Customize {...props} navigation={navigation} />;
// }