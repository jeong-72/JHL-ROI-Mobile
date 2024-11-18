import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Import Screens
import HomeScreen from '../screens/HomeScreen';
import PeopleViewcreen from "../screens/HomeScreen";
import HelpScreen from "../screens/HomeScreen";

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={TabScreen1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='People'
        component={TabScreen2}
        options={{
          tabBarLabel: 'People',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='people' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Help'
        component={TabScreen3}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='help' color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});