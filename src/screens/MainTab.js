import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../components/AppTabNavigator/HomeTab';
import LikesTab from '../components/AppTabNavigator/LikesTab';
import ProfileTab from '../components/AppTabNavigator/ProfileTab';
import SearchTab from '../components/AppTabNavigator/SearchTab';
import Icon from 'react-native-vector-icons/Ionicons';
import UploadPostButton from '../components/Post/UploadPostButton';
const Tab = createBottomTabNavigator();
function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerRight: () => <UploadPostButton />,
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
