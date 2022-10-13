import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import UploadScreen from './UploadScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
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
          headerShown: true,
          headerTitle: '새 글 작성',
          headerBackTitle: '뒤로가기',
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
