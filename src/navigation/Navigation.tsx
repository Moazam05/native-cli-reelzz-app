import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigator';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
