import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../constants/Colors';
import {HomeTabIcon, ProfileTabIcon} from './TabIcon';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? RFValue(5) : 0,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          backgroundColor: 'transparent',
          height: Platform.OS === 'ios' ? 70 : 80,
          borderTopWidth: 0,
          position: 'absolute',
        },
        tabBarActiveTintColor: Colors.theme,
        tabBarInactiveTintColor: '#447777',
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return <HomeTabIcon focused={focused} />;
          }
          if (route.name === 'Profile') {
            return <ProfileTabIcon focused={focused} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Post" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
