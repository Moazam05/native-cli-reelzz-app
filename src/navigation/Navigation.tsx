import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigator';
import {prepareNavigation} from '../utils/NavigationUtils';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={prepareNavigation}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
