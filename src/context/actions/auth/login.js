import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_START})
    axiosInstance
      .post('/auth/login', {
        password,
        username,
      })
      .then(async res => {
        console.log('user ', res.data.user)
        console.log('user ', JSON.stringify(res.data.user))
        await AsyncStorage.setItem('token', res.data.token)
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        const user = await AsyncStorage.getItem('user')
        console.log('user en storage ', user)
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong'},
        })
      })
  }
