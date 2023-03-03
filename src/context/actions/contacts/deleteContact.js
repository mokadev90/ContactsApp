import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'

export default id => dispatch => onSuccess => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
  })
  //   console.log(AsyncStorage.getItem('user'))
  axiosInstance
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      })
      console.log('lo eliminé')
      onSuccess()
    })
    .catch(err => {
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong'},
      })
    })
}
