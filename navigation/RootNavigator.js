import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// Import Screens

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='StackScreen1' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='StackScreen1'
        component={StackScreen1}
      />
      <Stack.Screen
        name='StackScreen1'
        component={StackScreen1}
      />
      <Stack.Screen
        name='StackScreen1'
        component={StackScreen1}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});