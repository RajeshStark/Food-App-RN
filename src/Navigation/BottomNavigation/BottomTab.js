import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import {Button, IconButton }  from 'react-native-paper';


import FreshNPackaged from '../../Screens/FreshNpackaged/FreshNPackaged';
import Functions from '../../Screens/Functions/Functions';
import Chef from '../../Screens/Chef/Chef';
import Account from '../../Screens/Account/Account'
import HomeScreen from '../../Screens/Home/Home'

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator 
    // tabBar={props => <MyTabBar {...props} />}
    initialRouteName="Home"
    tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor:'#808080'
      }}
    >

    <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon ios="ios-home" android="md-home" style={{ color: focused ? '#e91e63' : '#808080' }} />
          ),
        }}
      />

      <Tab.Screen
       name="FreshNPackaged" 
       component={FreshNPackaged}
       options={{
        tabBarLabel: 'Fresh',
        tabBarIcon: ({ focused }) => (
          <Icon ios="ios-cafe" android="md-cafe" style={{ color: focused ? '#e91e63' : '#808080' }} />
          // <IconButton
          //   icon="food"
          //   style={{ color: focused ? '#e91e63' : '#808080' }}
          //   size={30}
          // />
        ),
      }} />

      
     <Tab.Screen
       name="Functions" 
       component={Functions}
       options={{
        tabBarLabel: 'Party',
        tabBarIcon: ({ focused }) => (
          <Icon ios="ios-ice-cream" android="md-ice-cream" style={{ color: focused ? '#e91e63' : '#808080' }}/>
        ),
      }} />

       <Tab.Screen
       name="Chef" 
       component={Chef}
       options={{
        tabBarLabel: 'About Chef',
        tabBarIcon: ({focused }) => (
          // <Icon ios="ios-home" android="md-home" style={{ color: focused ? '#e91e63' : '#808080' }}/>
          <Button
  icon={({ size, color }) => (
    <Image
      source={require('../../Assets/Icons/ChefIcon.png')}
      style={{ width: 30, height: 25 }}
    />
  )}
>
</Button>
        ),
      }} />

      <Tab.Screen
       name="Acoount" 
       component={Account}
       options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused}) => (
          <Icon ios="ios-person" android="md-person" style={{ color: focused ? '#e91e63' : '#808080' }}/>
        ),
      }} />


    </Tab.Navigator>
  );
}

export default BottomTabs;
