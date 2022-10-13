import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import UploadScreen from './UploadScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
