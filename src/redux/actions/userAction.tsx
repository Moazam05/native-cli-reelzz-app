import {appAxios} from '../apiConfig';
import {setUser} from '../reducers/userSlice';

export const refetchUser = () => async (dispatch: any) => {
  try {
    const res = await appAxios.get('/user/profile');
    await dispatch(setUser(res.data.user));
  } catch (error: any) {
    console.log('PROFILE ->', error);
  }
};
