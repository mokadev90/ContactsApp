import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInterceptor'

export default () => dispatch => {
  AsyncStorage.removeItem('token')
  AsyncStorage.removeItem('user')
  dispatch({type: LOGOUT})
}
