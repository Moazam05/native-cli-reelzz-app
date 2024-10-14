import React, {FC, ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../constants/Colors';

interface CustomViewProps {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomView: FC<CustomViewProps> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default CustomView;
