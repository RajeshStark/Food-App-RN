import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import AllCategories from '../../Pages/Home/AllCategories';
import CategoryItems from '../../Pages/Home/CategoryItems';
import OrderPage from '../../Pages/Home/OrderPage';
import Cart from '../../Pages/Home/Cart';
import Customize from '../../Pages/Home/Customize/Customize';
import BottomTabs from '../BottomNavigation/BottomTab';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
     headerMode='none' 
     mode="card"
     initialRouteName="BottomTabs"
       
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs}/>
      <Stack.Screen name="AllCategories" component={AllCategories}/>
      <Stack.Screen name="CategoriyItems" component={CategoryItems}/>
      <Stack.Screen name="OrderPage" component={OrderPage}/>
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Customize" component={Customize}/>
    </Stack.Navigator>
  );
}

export default HomeStack;