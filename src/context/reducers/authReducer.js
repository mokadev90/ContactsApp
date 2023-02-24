import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../constants/actionTypes';

const authReducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {};

    case REGISTER_LOADING:
      return {...state, loading: true};

    case REGISTER_SUCCESS:
      return {...state, loading: false, error: payload};

    case REGISTER_FAIL:
      return {...state, loading: false, data: payload};

    default:
      return state;
  }
};

export default authReducer;
