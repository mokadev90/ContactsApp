import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes'

import axiosInstance from '../../../helpers/axiosInstance'

export default form => dispatch => onSuccess => {
  const requestPayload = {
    countryCode: form.phoneCode || '',
    firstName: form.firstName || '',
    lastName: form.lastName || '',
    phoneNumber: form.phoneNumber || '',
    contactPicture: form.contactPicture || '',
    isFavorite: form.isFavorite || false,
  }
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  })
  axiosInstance
    .post('/contacts', requestPayload)
    .then(res => {
      console.log('ok ', JSON.stringify(res.data, null, 2))
      dispatch({
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      })
      onSuccess()
    })
    .catch(err => {
      console.log('requestPayload ', requestPayload)
      console.log('error ', JSON.stringify(err.response.data, null, 2))
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong'},
      })
    })
}
