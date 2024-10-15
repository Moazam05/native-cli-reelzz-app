import {Alert} from 'react-native';
import {setUser} from './reducers/userSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {LOGIN} from './API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate, resetAndNavigate} from '../utils/NavigationUtils';

interface RegisterData {
  id_token: string;
  provider: string;
  name: string;
  email: string;
  userImage: string;
}

const handleSignInSuccess = async (res: any, dispatch: any) => {
  await AsyncStorage.setItem('access_token', res.data.tokens.access_token);
  await AsyncStorage.setItem('refresh_token', res.data.tokens.refresh_token);
  await dispatch(setUser(res.data.user));
  resetAndNavigate('BottomTab');
};

const handleSignInError = (error: any, data: RegisterData) => {
  console.log(error);
  if (error.response.status == 401) {
    navigate('RegisterScreen', {
      ...data,
    });
    return;
  }
  Alert.alert('We are facing issues, try again later');
};

export const signInWithGoogle = () => async (dispatch: any) => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {idToken, user} = await GoogleSignin.signIn();
    await axios
      .post(LOGIN, {
        provider: 'google',
        id_token: idToken,
      })
      .then(async res => {
        await handleSignInSuccess(res, dispatch);
      })
      .catch((err: any) => {
        const errorData = {
          email: user.email,
          name: user.name,
          userImage: user.photo,
          provider: 'google',
          id_token: idToken,
        };
        handleSignInError(err, errorData as RegisterData);
      });
  } catch (error) {
    console.log('GOOGLE ERROR', error);
  }
};
