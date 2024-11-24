import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import PeopleNavigator from '../navigation/PeopleNavigator';

export default function PersonViewScreen(props) {

//region Navigation


function showPeopleView() {
  props.navigation.navigate("PeopleView");
}

//#endregion


  return (
    <Surface style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text variant='displaySmall'>PersonViewScreen</Text>
      
    </Surface>
  )
}