import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Navigation from './src/navigation/Navigation';

GoogleSignin.configure({
  webClientId:
    '116385274952-020gkuh3hc82or1pkqhkga6nb9pi1as1.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  iosClientId:
    '116385274952-42f2jfnc850oqcfqkcsqg0o1s0nq8jk7.apps.googleusercontent.com',
});

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
