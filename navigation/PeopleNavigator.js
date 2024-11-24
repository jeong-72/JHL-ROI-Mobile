import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// Import Screens
import PeopleViewScreen from '../screens/PeopleViewScreen';
import PersonEditScreen from '../screens/PersonEditScreen';
import PersonViewScreen from '../screens/PersonViewScreen';


const Stack = createStackNavigator();

export default function PeopleNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PeopleView"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="PeopleView"
        component={PeopleViewScreen}
        options={{ title: "View People" }}
      />
      <Stack.Screen
        name="PersonView"
        component={PersonViewScreen}
        options={{ title: "View Person" }}
      />
      <Stack.Screen
        name="PersonEdit"
        component={PersonEditScreen}
        options={{ title: "Edit Person" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});