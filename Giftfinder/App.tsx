// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Homescreen';
import InputPreferencesScreen from './Components/InputPreferencesScreen';
import GiftRecommendationsScreen from './Components/GiftRecommendationsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Preferences" component={InputPreferencesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="getRecommendations" component={GiftRecommendationsScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;