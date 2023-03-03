import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'

import axiosInstance from '../../../helpers/axiosInstance'

export default (form, id) => dispatch => onSuccess => {
  console.log('form.phoneCode ', form.phoneCode)
  const requestPayload = {
    countryCode: form.countryCode || '',
    phoneCode: form.phoneCode || '',
    firstName: form.firstName || '',
    lastName: form.lastName || '',
    phoneNumber: form.phoneNumber || '',
    contactPicture: form.contactPicture || '',
    isFavorite: form.isFavorite || false,
  }
  dispatch({
    type: EDIT_CONTACT_LOADING,
  })
  axiosInstance
    .put(`/contacts/${id}`, requestPayload)
    .then(res => {
      console.log('ok ', JSON.stringify(res.data, null, 2))
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      })
      onSuccess(res.data)
    })
    .catch(err => {
      console.log('requestPayload ', requestPayload)
      console.log('error ', JSON.stringify(err.response.data, null, 2))
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: errresponse
          ? errresponse.data
          : {error: 'Something went wrong'},
      })
    })
}
