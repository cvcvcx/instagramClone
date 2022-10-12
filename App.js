import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {NativeBaseProvider} from 'native-base';
function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <RootStack />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
