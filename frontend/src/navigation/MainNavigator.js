import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeTabNavigator = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="TabNavigator" component={HomeTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
