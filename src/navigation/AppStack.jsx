import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, Text, View } from 'react-native';
import ExpensesDetailScreen from '../screens/ExpensesDetailScreen';

const Stack = createNativeStackNavigator();

const AppStack =()=> {
  const {width} = Dimensions.get('screen')
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={ExpensesDetailScreen} />
    </Stack.Navigator>
  );
}
export default AppStack