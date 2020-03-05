import React, { useState } from 'react';
import { Searchbar, IconButton, TouchableRipple } from 'react-native-paper';
import { View, StatusBar, ScrollView, Text, Animated } from 'react-native';
import * as Animatade from 'react-native-animatable';

import stylesHome from '../../Styles/Home/Home.styles';
import { colors, sizes, fonts } from '../../Styles/GlobalStyles';
import Categories from '../../Components/Home/Categories';
import PopularItems from '../../Components/Home/PopularItems';
import { PackagedItemsSample } from '../../Components/Home/PackagedItems';


export default class Home extends React.Component {
 
  state = {
    firstQuery: '',
   
  };


  render() {
    const { firstQuery } = this.state;
    const Navigation = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#fff', flex:1 }}>
        <StatusBar backgroundColor="#FC4041" barStyle="light-content" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', 
        paddingHorizontal: 10, paddingTop: 10 ,
         zIndex:1000, elavation:1000
       
       }}>
          <Searchbar
            style={stylesHome.searchbar}
            iconColor='#FC4041'
            placeholder="Search Here..."
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}

          />
          <IconButton
            icon="cart"
            color={colors.mainRed}
            size={30}
            onPress={() => Navigation.navigate('Cart')}
          />

        </View>
        <ScrollView
        bounces={false}
         showsVerticalScrollIndicator={false}
         
         >
          <View>

            {/* Categories */}
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Categories</Text>

                <TouchableRipple
                  // onPress={() => Navigation.navigate('AllCategories')}
                  onPress={() => Navigation.navigate('AllCategories')}
                  rippleColor="rgba(0, 0, 0, .32)"
                  style={{ justifyContent: 'flex-end' }}>
                  <Text style={{ fontSize: 14, marginRight: 10, paddingHorizontal: 15 }} >View all</Text>
                </TouchableRipple>
              </View>
              <Categories />
            </View>


            {/* PopularItems */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* <Text style={{ fontSize: 22, marginLeft: 10 }}>Popular Foods</Text> */}
              <Text style={{ fontSize: 18, marginLeft: 10 }}>Popular Foods</Text>

              {/* <TouchableRipple
                        onPress={() => this.props.navigation("AllCategories")}
                        rippleColor="rgba(0, 0, 0, .32)" 
                        style={{justifyContent:'flex-end'}}>

<Text style={{ fontSize: 16, marginRight: 10, paddingHorizontal: 15 }} >View all</Text>

                    </TouchableRipple> */}
            </View>
            <View>
              <PopularItems />
            </View>

            {/* Packaged Items*/}


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, marginLeft: 10 }}>Packaged Foods</Text>

              {/* <TouchableRipple
                        onPress={() => this.props.navigation("AllCategories")}
                        rippleColor="rgba(0, 0, 0, .32)" 
                        style={{justifyContent:'flex-end'}}>

<Text style={{ fontSize: 16, marginRight: 10, paddingHorizontal: 15 }} >View all</Text>

                    </TouchableRipple> */}
            </View>
            <View>
              <PackagedItemsSample/>
            </View>


          </View>
        </ScrollView>

      </View>

    );
  }
}