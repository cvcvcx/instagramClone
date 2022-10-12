import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/screens/RootStack';
import {PostContextProvider} from './src/contexts/PostContext';
function App() {
  return (
    <NavigationContainer>
      <PostContextProvider>
        <RootStack />
      </PostContextProvider>
    </NavigationContainer>
  );
}
export default App;
