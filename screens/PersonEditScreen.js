import React, { useEffect, useState } from 'react';
import {Avatar, Card, IconButton, FAB, Snackbar, TextInput, Dialog, Portal, Button, Text, Surface, Divider, Searchbar, useTheme } from "react-native-paper";
import {View, Image, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import { Dropdown } from "react-native-paper-dropdown";
import {
  fetchPersonById,
  addPerson,
  updatePerson,
  fetchDepartments,
} from "../utils/api";

export default function PersonEditScreen(props) {
  theme = useTheme();
  const { id } = props.route.params;
  const [person, setPerson] = useState({
    name: "",

  });
  const [offline, setOffline] = useState(false);
  const [error, setError] = useState([null]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([null]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDepartments = await fetchDepartments();
        setDepartments(fetchedDepartments);
        setSelectedDepartment(fetchedDepartments[0].id);

        if (id !== -1) {
          const data = await fetchPersonById(id);
          setPerson(data);
          setSelectedDepartment(data.departmentId);
          console.log(data);
        } else {
          console.log(person);
        }
      } catch (err) {
        console.error(err);
        setOffline(true);
        setError("Unable to fetch data, offline mode");
      }
    };

    fetchData();
  }, []);

  function showPersonView() {
    props.navigation.navigate("ViewPerson");
  }

  async function handleSubmit() {
    try {
      const updatedPerson = { ...person, departmentId: selectedDepartment };
      if (id === -1) {
        await addPerson(updatedPerson);
      } else {
        await updatePerson(id, updatedPerson);
      }
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
      setError("Failed to save data.");
    }
  }

  async function handleSubmitTest() {
    try {
      if (id === -1) {
        await addPerson({
          name: "New Banana",
          price: 3.3,
          stock: 999,
          description: "Fresh yellow banana",
          categoryId: 1,
        });
      } else {
        await updatePerson(id, {
          ...person,
          name: person.name + " Updated",
        });
      }
      props.navigation.goBack();
    } catch (err) {
      console.error(err);
      setError("Failed to save data.");
    }
  }
  return (
    <Surface style={{ flex: 1, padding: 16 }}>
      <Text
        variant="headlineLarge"
        style={{
          marginHorizontal: 10,
          marginBottom: 24,
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        {id === -1 ? "New Person" : person.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      ></View>
      <View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 34 }}
        >
          <TextInput
            label="Name"
            value={person.name}
            onChangeText={(text) => setPerson({ ...person, name: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Phone"
            value={person.phone}
            onChangeText={(text) => setPerson({ ...person, phone: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="DepartmentID"
            value={person.stock}
            onChangeText={(text) => setPerson({ ...person, department: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Street"
            value={person.description}
            onChangeText={(text) => setPerson({ ...person, street: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="City"
            value={person.stock}
            onChangeText={(text) => setPerson({ ...person, city: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="State"
            value={person.stock}
            onChangeText={(text) => setPerson({ ...person, state: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Zip"
            value={person.stock}
            onChangeText={(text) => setPerson({ ...person, zip: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Country"
            value={person.stock}
            onChangeText={(text) => setPerson({ ...person, country: text })}
            mode="outlined"
            keyboardType="numeric"
            style={{ marginBottom: 16 }}
          />

          <Dropdown
            label="Departments"
            mode="outlined"
            value={selectedDepartment}
            onSelect={setSelectedDepartment}
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
          />
        </ScrollView>
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Button mode="outlined" icon="keyboard-return" onPress={showPersonView}>
          Cancel
        </Button>
      </View>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <Button mode="contained" icon="update" onPress={handleSubmit}>
          Ok
        </Button>
      </View>
    </Surface>
  );
}