import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen';
import DetailViewScreen from './src/screens/DetailViewScreen';
import CreateMemoScreen from './src/screens/CreateMemoScreen';
import ModifyMemoScreen from './src/screens/ModifyMemoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="Detail" component={DetailViewScreen} />
      <Stack.Screen name="CreateMemo" component={CreateMemoScreen} />
      <Stack.Screen name="ModifyMemo" component={ModifyMemoScreen} />
    </Stack.Navigator>
   </NavigationContainer>
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
