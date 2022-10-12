import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MainTab from './MainTab';
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerLeft: ({onPress}) => (
            <TouchableOpacity onPress={onPress}>
              <Icon
                name="ios-camera"
                style={[{paddingLeft: 10, fontSize: 24, color: 'black'}]}
              />
            </TouchableOpacity>
          ),
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerRight: ({onPress}) => {
            return (
              <View>
                <TouchableOpacity onPress={onPress}>
                  <Icon
                    name="ios-send"
                    style={[{paddingRight: 10, fontSize: 24, color: 'black'}]}
                  />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
