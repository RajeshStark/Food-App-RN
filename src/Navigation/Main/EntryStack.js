import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from '../HomeStack/HomeStack';

const Stack = createStackNavigator();

function EntryStack() {
  return (
    <Stack.Navigator
     headerMode='none' 
     mode="card"
     initialRouteName="Home"
       
    >
    <Stack.Screen name="Home" component={HomeStack}/>
    </Stack.Navigator>
  );
}

export default EntryStack;