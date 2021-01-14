import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Weather } from "./views/Weather";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer styles={app.container}>
      <Stack.Navigator headerMode={'none'}>
      <Stack.Screen 
        name="Weather" 
        component={Weather}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const app = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
