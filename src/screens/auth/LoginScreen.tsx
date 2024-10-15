import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Lottie from 'lottie-react-native';
import Animation from '../../assets/animations/login.json';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/Fonts';
import CustomText from '../../components/global/CustomText';

const LoginScreen = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={styles.lottieContainer}>
        <Lottie source={Animation} autoPlay loop style={styles.lottie} />
      </View>

      <View style={styles.titleContainer}>
        <LinearGradient
          colors={[`rgba(0,0,0,0)`, Colors.text, `rgba(0,0,0,0)`]}
          style={styles.linearGradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
        <CustomText variant="h2" fontFamily={FONTS.Reelz}>
          Reelzzz
        </CustomText>
        <LinearGradient
          colors={[`rgba(0,0,0,0)`, Colors.text, `rgba(0,0,0,0)`]}
          style={styles.linearGradient}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
        />
      </View>

      <CustomText variant="h6" fontFamily={FONTS.Medium} style={styles.tagline}>
        Rewarding Every Moment for Creators and Viewers.
      </CustomText>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
  lottieContainer: {
    width: RFValue(220),
    height: RFValue(220),
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  linearGradient: {
    flex: 1,
    height: 1,
  },
  tagline: {
    textAlign: 'center',
    marginVertical: 30,
  },
  gimg: {
    height: 20,
    width: 20,
  },
  footerText: {
    opacity: 0.6,
    position: 'absolute',
    bottom: 10,
  },
});
