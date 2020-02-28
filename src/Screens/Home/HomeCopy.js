import React,  { useState } from 'react';
import { Searchbar, IconButton,TouchableRipple } from 'react-native-paper';
import { View,StatusBar,ScrollView,Text,Animated} from 'react-native';


import stylesHome from '../../Styles/Home/Home.styles';
import { colors, sizes, fonts } from '../../Styles/GlobalStyles';
import Categories from '../../Components/Home/Categories';
import PopularItems from '../../Components/Home/PopularItems';

export default class Home extends React.Component{

  state = {
    firstQuery: '',
  };


 render(){
  const { firstQuery } = this.state;
  const Navigation = this.props.navigation;
    return (
      <View style={{ backgroundColor: '#fff' }}>
           <StatusBar backgroundColor="#FC4041" barStyle="light-content" />
        <View style={{ flexDirection: 'row',alignItems:'center' ,justifyContent: 'space-around', paddingHorizontal: 10, paddingTop:10 }}>
          <Searchbar
            style={stylesHome.searchbar}
            iconColor='#FC4041'
            placeholder="Type your favorite food"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}

          />
          <IconButton
            icon="cart"
            color={colors.mainRed}
            size={30}
            onPress={() => console.log('Pressed')}
          />

        </View>
        <ScrollView style={{marginBottom:80}}>
          <View>
            <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, marginLeft: 10 }}>Categories</Text>

                    <TouchableRipple
                        onPress={() => Navigation.navigate('AllCategories')}
                        rippleColor="rgba(0, 0, 0, .32)"

                    >
                        <Text style={{ fontSize: 22, marginRight: 10, paddingHorizontal: 15 }}
                         
                        >all</Text>
                    </TouchableRipple>
                </View>
              <Categories />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 22, marginLeft: 10 }}>PopularItems</Text>

                    {/* <TouchableRipple
                        onPress={() => this.props.navigation("AllCategories")}
                        rippleColor="rgba(0, 0, 0, .32)" >

                        <Text style={{ fontSize: 22, marginRight: 10, paddingHorizontal: 15 }}>all</Text>

                    </TouchableRipple> */}
                </View>
            <View>
              <PopularItems />
            </View>
          </View>
        </ScrollView>

      </View>

    );
  }
}