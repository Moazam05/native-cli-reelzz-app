import {View, Animated, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../constants/Colors';
import Logo from '../../assets/images/logo_t.png';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {useAppDispatch} from '../../redux/reduxHook';
import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {refresh_tokens} from '../../redux/apiConfig';
import {refetchUser} from '../../redux/actions/userAction';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const [isStop, setIsStop] = useState(false);
  const scale = new Animated.Value(1);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const tokenCheck = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const refresh_token = await AsyncStorage.getItem('refresh_token');

    if (refresh_token === null) {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
      return;
    }

    if (access_token) {
      const decodedAccessToken = jwtDecode(access_token);
      const decodedRefreshToken = jwtDecode(refresh_token);

      const currentTime = Date.now() / 1000;

      if (
        decodedRefreshToken !== null &&
        decodedRefreshToken?.exp < currentTime
      ) {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
        Alert.alert('Session Expired, please login again');
        return false;
      }

      if (decodedAccessToken?.exp < currentTime) {
        try {
          refresh_tokens();
          dispatch(refetchUser());
        } catch (error) {
          console.log(error);
          Alert.alert('There was an error');
          return false;
        }
      }
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab'}],
      });
      return true;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
    return false;
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    const breathingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.1, // Scale up
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1, // Scale down
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    );

    if (!isStop) {
      breathingAnimation.start();
    }

    return () => {
      breathingAnimation.stop();
    };
  }, [isStop]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={Logo}
          style={{
            width: '60%',
            height: '25%',
            resizeMode: 'contain',
            transform: [{scale}],
          }}
        />

        <CustomText variant="h3" fontFamily={FONTS.Reelz}>
          Reelzz
        </CustomText>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
