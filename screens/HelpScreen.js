import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";


export default function HelpScreen(props) {

  return (
    <Surface
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text variant="displaySmall">HelpScreen
{/* 
        1. Staff Directory The Staff Directory feature allows you to
        browse a list of all employees in the organisation. You can search for
        specific staff members and view their detailed information, including
        their roles, contact details, and departments. 2. Add New Staff This
        feature enables you to add a new staff member to the directory. To do
        so, tap on the '+' icon or the 'Add Staff' button, fill in the required
        details such as name, position, department, and contact information and
        save the entry. 3.Update Staff Information You can update an existing
        staff member's information by navigating to their profile and selecting
        the 'Edit' option. Make the necessary changes and ensure to save them to
        keep the directory current. 4. Delete Staff Entry To remove a staff
        member from the directory, go to their profile, tap the 'Delete' button
        and confirm the action. This will permanently remove the staff member
        from the directory */}
      </Text>
    </Surface>
  );
}