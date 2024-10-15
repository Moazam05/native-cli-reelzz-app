import axios from 'axios';
import {BASE_URL, REFRESH_TOKEN} from './API';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetAndNavigate} from '../utils/NavigationUtils';

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

appAxios.interceptors.request.use(async config => {
  const access_token = await AsyncStorage.getItem('access_token');
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refresh_tokens();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log('Error Refreshing Token');
      }
    }

    if (error.response && error.response.status != 401) {
      const errorMessage = error.response.data.msg || 'something went wrong';
      Alert.alert(errorMessage);
    }
    return Promise.reject(error);
  },
);

export const refresh_tokens = async () => {
  try {
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    const response = await axios.post(REFRESH_TOKEN, {
      refresh_token,
    });
    const new_access_token = response.data.access_token;
    const new_refresh_token = response.data.refresh_token;

    await AsyncStorage.setItem('access_token', new_access_token);
    await AsyncStorage.setItem('refresh_token', new_refresh_token);
    return new_access_token;
  } catch (error) {
    console.log('REFRESH TOKEN ERROR');
    await AsyncStorage.removeItem('access_token');
    resetAndNavigate('LoginScreen');
  }
};
