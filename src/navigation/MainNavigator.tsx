import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mergedStacks} from './ScreenCollection';

const Stack = createNativeStackNavigator();

const MainNavigation: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={() => ({
        headerShown: false,
      })}>
      {mergedStacks.map(stack => (
        <Stack.Screen
          key={stack.name}
          name={stack.name}
          component={stack.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigation;
