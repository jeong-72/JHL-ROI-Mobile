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
  const imageIndex = {
    logo: require("../assets/images/roi-logo.jpg"),
    mono: require("../assets/images/roi-logo-monochrome.jpg"),
  };
  return (
    <Surface style={{ flex: 1, padding: 16 }} mode="flat" elevation={1}>
      <IconButton
        icon="account-circle-outline"
        mode="contained"
        iconColor={theme.colors.onSecondary}
        size={24}
      />
      <Text
        variant="headlineLarge"
        style={{
          paddingTop: 20,
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        Hi, John
      </Text>
      <Divider />
      <Image
        source={imageIndex.logo}
        resizeMode="contain"
        style={{ width: "300", height: 150, margin: 20 }}
      />

      <Text
        variant="headlineLarge"
        style={{
          textAlign: "left",
          paddingVertical: 20,
          fontWeight: "bold",
        }}
      >
        ROI HR System
      </Text>
      <View
        style={{
          flexDirection: "row",
          fontFamily: "Trebuchet MS",
          paddingVertical: 20,
        }}
      >
        Remaining Leave Days:10
      </View>
      <Divider />
    </Surface>
  );
}
