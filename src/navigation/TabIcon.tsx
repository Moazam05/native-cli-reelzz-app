import React, {FC} from 'react';
import Home from '../assets/icons/home.png';
import Profile from '../assets/icons/profile.png';
import {Image} from 'react-native';
import {bottomBarStyles} from '../styles/NavigationBarStyles';
import {Colors} from '../constants/Colors';

interface TabProps {
  name: string;
}

interface IconProp {
  focused: boolean;
}

const TabIcon: FC<TabProps> = ({name}) => {
  return (
    <Image
      source={name === 'Home' ? Home : Profile}
      style={[bottomBarStyles.tabIcon, {tintColor: Colors.white}]}
    />
  );
};

const TabIconFocused: FC<TabProps> = ({name}) => {
  return (
    <Image
      source={name === 'Home' ? Home : Profile}
      style={[bottomBarStyles.tabIcon, {tintColor: Colors.white}]}
    />
  );
};

export const HomeTabIcon: FC<IconProp> = ({focused}) => {
  return focused ? <TabIconFocused name="Home" /> : <TabIcon name="Home" />;
};

export const ProfileTabIcon: FC<IconProp> = ({focused}) => {
  return focused ? (
    <TabIconFocused name="Profile" />
  ) : (
    <TabIcon name="Profile" />
  );
};
