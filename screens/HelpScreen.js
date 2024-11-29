import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";


export default function HelpScreen(props) {
//    const isFocused = useIsFocused();
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
        Help Screen
      </Text>
      <Text
        variant="titleLarge"
        style={{
          marginTop: 30,
          marginBottom: 20,
          paddingLeft: 12,
          fontWeight: "medium",
        }}
      >
        1. Staff Directory
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          color: "#2C3E50",
          paddingLeft: 14,
          paddingRight: 14,
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        The Staff Directory feature allows you to browse a list of all employees
        in the organisation. You can search for specific staff members and view
        their detailed information, including their roles, contact details, and
        departments.
      </Text>
      <Text
        variant="titleLarge"
        style={{
          marginBottom: 20,
          paddingLeft: 13,
          fontWeight: "medium",
        }}
      >
        2. Add New Staff
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          color: "#2C3E50",
          paddingLeft: 14,
          paddingRight: 14,
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        This feature enables you to add a new staff member to the directory. To
        do so, tap on the '+' icon or the 'Add Staff' button, fill in the
        required details such as name, position, department, and contact
        information and save the entry.
      </Text>
      <Text
        variant="titleLarge"
        style={{
          marginBottom: 20,
          paddingLeft: 13,
          fontWeight: "medium",
        }}
      >
        3.Update Staff Information
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          color: "#2C3E50",
          paddingLeft: 14,
          paddingRight: 14,
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        You can update an existing staff member's information by navigating to
        their profile and selecting the 'Edit' option. Make the necessary
        changes and ensure to save them to keep the directory current.
      </Text>
      <Text
        variant="titleLarge"
        style={{
          marginBottom: 20,
          paddingLeft: 13,
          fontWeight: "condensed",
        }}
      >
        4. Delete Staff Entry
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          color: "#2C3E50",
          paddingLeft: 14,
          paddingRight: 14,
          marginBottom: 24,
          fontSize: 14,
        }}
      >
        To remove a staff member from the directory, go to their profile, tap
        the 'Delete' button and confirm the action. This will permanently remove
        the staff member from the directory
      </Text>
    </Surface>
  );
}


