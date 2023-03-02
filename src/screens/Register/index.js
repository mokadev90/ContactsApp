import {useFocusEffect, useNavigation} from '@react-navigation/native'
import {useCallback, useContext, useEffect, useState} from 'react'
import RegisterComponent from '../../components/Register'
import {LOGIN} from '../../constants/routeNames'
import register, {clearAuthState} from '../../context/actions/auth/register'
import {GlobalContext} from '../../context/Provider'
import axiosInstance from '../../helpers/axiosInstance'

const Register = () => {
  const [form, setForm] = useState({})
  const {navigate} = useNavigation()
  const [errors, setErrors] = useState({})
  const {
    authDispatch,
    authState: {loading, error, data},
  } = useContext(GlobalContext)

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch)
        }
      }
    }, [data, error]),
  )

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value})

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field need min 6 characters'}
          })
        } else {
          setErrors(prev => {
            return {...prev, [name]: null}
          })
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null}
        })
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'}
      })
    }
  }

  const onSubmit = () => {
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Please add a Username'}
      })
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a First name'}
      })
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a Last name'}
      })
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a Email'}
      })
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a Password'}
      })
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, {data: response})
      })
    }
  }

  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  )
}

export default Register
