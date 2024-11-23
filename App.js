import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from "./navigation/MainNavigator";
import RootNavigator from "./navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
