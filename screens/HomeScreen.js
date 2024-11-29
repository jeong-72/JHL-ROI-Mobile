import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Card,
  IconButton,
  FAB, Snackbar,
  TextInput,
  Dialog,
  Portal,
  Button,
  Text,
  Surface,
  Divider,
  Searchbar,
  useTheme
} from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";

export default function HomeScreen(props) {
    const theme = useTheme();
  return (
    <Surface style={{ flex: 1, padding: 16 }} mode="flat" elevation={1}>
      <Text
        variant="headlineLarge"
        style={{
          marginHorizontal: 10,
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        Hi, John
      </Text>
      {/* <ScrollView style={styles.scrollView}>
        <View style={styles.squareBox}>
          <Text style={styles.text}>ROI</Text>
        </View>
      </ScrollView> */}
      <View>
        <Text
          variant="headlineLarge"
          style={{
            paddingTop: 40,
            paddingVertical: 10,
            fontFamily: "Trebuchet MS",
            fontWeight: "bold",
          }}
        >
          ROI HR System
        </Text>
        <Text style={{ fontFamily: "Trebuchet MS" }}>
          Remaining Leave Days:
        </Text>
      </View>
    </Surface>
  );
}

// const styles = StyleSheet.create({
//   scrollView: {
//     flex:1, padding: 20,
//   },
//   squareBox: {
//     width: 300, height: 300, backgoundColor: #941a1d,
//   },
//     text: {
//     fontSize: 100,
//   }
// })