import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from "./navigation/MainNavigator";
import RootNavigator from "./navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from "react-native-paper";



export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const theme = {

  "colors": {
    "primary": "rgb(175, 46, 45)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 218, 214)",
    "onPrimaryContainer": "rgb(65, 0, 3)",
    "secondary": "rgb(155, 68, 40)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 219, 208)",
    "onSecondaryContainer": "rgb(58, 11, 0)",
    "tertiary": "rgb(155, 68, 40)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(255, 219, 208)",
    "onTertiaryContainer": "rgb(58, 11, 0)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(32, 26, 25)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 25)",
    "surfaceVariant": "rgb(245, 221, 219)",
    "onSurfaceVariant": "rgb(83, 67, 66)",
    "outline": "rgb(133, 115, 113)",
    "outlineVariant": "rgb(216, 194, 191)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 46)",
    "inverseOnSurface": "rgb(251, 238, 236)",
    "inversePrimary": "rgb(255, 179, 173)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(251, 241, 245)",
      "level2": "rgb(249, 235, 238)",
      "level3": "rgb(246, 229, 232)",
      "level4": "rgb(245, 226, 230)",
      "level5": "rgb(244, 222, 226)"
    },
    "surfaceDisabled": "rgba(32, 26, 25, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 25, 0.38)",
    "backdrop": "rgba(59, 45, 44, 0.4)"
  }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#941a1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
