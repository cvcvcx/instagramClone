import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../components/AppTabNavigator/HomeTab';
import LikesTab from '../components/AppTabNavigator/LikesTab';
import ProfileTab from '../components/AppTabNavigator/ProfileTab';
import SearchTab from '../components/AppTabNavigator/SearchTab';
import AddMedia from '../components/AppTabNavigator/AddMedia';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import UploadScreen from './UploadScreen';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
function MainTab() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: true,
        headerStyle: {backgroundColor: 'black'},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          title: 'Instagram',
          headerTitleContainerStyle: {color: 'black'},
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => {
                navigation.navigate('UploadScreen');
              }}>
              <AntDesign
                name="plussquareo"
                size={24}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
