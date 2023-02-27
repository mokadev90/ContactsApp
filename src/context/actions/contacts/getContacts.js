import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInterceptor'

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  })
  //   console.log(AsyncStorage.getItem('user'))
  axiosInstance
    .get('/contacts')
    .then(res => {
      dispatch({
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong'},
      })
    })
}
