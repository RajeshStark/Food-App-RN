import React, { Component } from 'react';
import { View, Text, Image,Dimensions } from 'react-native';
import { Appbar, Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export class CategoryItems extends Component {

    render() {
        return (
            <View style={{backgroundColor:"#fff"}}>
                <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Biryani"

                    />

                </Appbar.Header>
                <ScrollView
                  
                >
                   <View style={{marginBottom:"15%"}}>

                       <TouchableOpacity
                        style={{flexDirection:"row",margin:10,borderRadius:10}}
                        onPress={() => this.props.navigation.navigate("OrderPage")}
                        >
                           <Image 
                            source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                            style={{width:100, height:100,borderRadius:10}}
                           />
                           <View style={{ padding:10}}>
                               <Text style={{fontSize:18,}}>Paneer Biryani</Text>
                               <Text style={{fontSize:16,color:'red'}}>$ 78</Text>
                               <Text>Lorem Ipsum Simply a Dummy text{"\n"}forchecking purpose</Text>
                           </View>
                       </TouchableOpacity>
                       <Divider style={{marginLeft:20, width: (DEVICE_WIDTH)-40 ,backgroundColor:"#C0C0C0"}} />

                       <TouchableOpacity
                        style={{flexDirection:"row",margin:10,borderRadius:10}}
                        onPress={() => this.props.navigation.navigate("OrderPage")}
                        >
                           <Image 
                            source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                            style={{width:100, height:100,borderRadius:10}}
                           />
                           <View style={{ padding:10}}>
                               <Text style={{fontSize:18,}}>Paneer Biryani</Text>
                               <Text style={{fontSize:16,color:'red'}}>$ 78</Text>
                               <Text>Lorem Ipsum Simply a Dummy text{"\n"}forchecking purpose</Text>
                           </View>
                       </TouchableOpacity>
                       <Divider style={{marginLeft:20, width: (DEVICE_WIDTH)-40 ,backgroundColor:"#C0C0C0"}} />

                       <TouchableOpacity
                        style={{flexDirection:"row",margin:10,borderRadius:10}}
                        onPress={() => this.props.navigation.navigate("OrderPage")}
                        >
                           <Image 
                            source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                            style={{width:100, height:100,borderRadius:10}}
                           />
                           <View style={{ padding:10}}>
                               <Text style={{fontSize:18,}}>Paneer Biryani</Text>
                               <Text style={{fontSize:16,color:'red'}}>$ 78</Text>
                               <Text>Lorem Ipsum Simply a Dummy text{"\n"}forchecking purpose</Text>
                           </View>
                       </TouchableOpacity>
                       <Divider style={{marginLeft:20, width: (DEVICE_WIDTH)-40 ,backgroundColor:"#C0C0C0"}} />

                       <TouchableOpacity
                        style={{flexDirection:"row",margin:10,borderRadius:10}}
                        onPress={() => this.props.navigation.navigate("OrderPage")}
                        >
                           <Image 
                            source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                            style={{width:100, height:100,borderRadius:10}}
                           />
                           <View style={{ padding:10}}>
                               <Text style={{fontSize:18,}}>Paneer Biryani</Text>
                               <Text style={{fontSize:16,color:'red'}}>$ 78</Text>
                               <Text>Lorem Ipsum Simply a Dummy text{"\n"}forchecking purpose</Text>
                           </View>
                       </TouchableOpacity>
                       <Divider style={{marginLeft:20, width: (DEVICE_WIDTH)-40 ,backgroundColor:"#C0C0C0"}} />

                       <TouchableOpacity
                        style={{flexDirection:"row",margin:10,borderRadius:10}}
                        onPress={() => this.props.navigation.navigate("OrderPage")}
                        >
                           <Image 
                            source={{ uri: 'https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2017/01/paneer-biryani-1.jpg' }}
                            style={{width:100, height:100,borderRadius:10}}
                           />
                           <View style={{ padding:10}}>
                               <Text style={{fontSize:18,}}>Paneer Biryani</Text>
                               <Text style={{fontSize:16,color:'red'}}>$ 78</Text>
                               <Text>Lorem Ipsum Simply a Dummy text{"\n"}forchecking purpose</Text>
                           </View>
                       </TouchableOpacity>
                  


                   </View>
                </ScrollView>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;


export default function (props) {
    const navigation = useNavigation();

    return <CategoryItems {...props} navigation={navigation} />;
}