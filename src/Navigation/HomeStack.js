import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import AllCategories from '../Pages/Home/AllCategories';
import CategoryItems from '../Pages/Home/CategoryItems';
import OrderPage from '../Pages/Home/OrderPage';

import ImageZoom from '../Pages/Home/LightBox';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
     headerMode='none' 
     mode="card"
     initialRouteName="Home"
    
       
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllCategories" component={AllCategories}/>
      <Stack.Screen name="CategoriyItems" component={CategoryItems}/>
      <Stack.Screen name="OrderPage" component={OrderPage}/>
      <Stack.Screen name="LightBox" component={ImageZoom}/>
    </Stack.Navigator>
  );
}

export default HomeStack;