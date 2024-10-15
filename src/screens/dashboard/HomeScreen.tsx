import {View, Text} from 'react-native';
import React from 'react';
import CustomView from '../../components/global/CustomView';
import {GIPHY_API_KEY_URL} from '@env';

const HomeScreen = () => {
  console.log('GIPHY_API_KEY_URL', GIPHY_API_KEY_URL);
  return (
    <CustomView>
      <Text
        style={{
          color: 'white',
        }}>
        HomeScreen
      </Text>
    </CustomView>
  );
};

export default HomeScreen;
