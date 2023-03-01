import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes'
import getContacts from '../actions/contacts/getContacts'

const contactsReducer = (state, {type, payload}) => {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      }

    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: true,
          error: null,
        },
      }

    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: payload,
          error: null,
        },
      }

    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          data: payload,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: [payload, ...state.getContacts.data],
          error: null,
        },
      }

    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      }

    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContact: {
          ...state.createContact,
          loading: false,
          error: payload,
        },
      }

    default:
      return state
  }
}

export default contactsReducer
