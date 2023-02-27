import {useNavigation, useRoute} from '@react-navigation/native'
import {useContext, useEffect, useState} from 'react'
import LoginComponent from '../../components/Login'
import login from '../../context/actions/auth/login'
import {GlobalContext} from '../../context/Provider'

const Login = () => {
  const [form, setForm] = useState({})
  const [justSignedUp, setJustSignedUp] = useState(false)
  const {params} = useRoute()

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true)
      setForm({...form, username: params.data.username})
    }
  }, [])

  const {
    authDispatch,
    authState: {loading, error},
  } = useContext(GlobalContext)

  const onSubmit = () => {
    if (form.username && form.password) {
      login(form)(authDispatch)
    }
  }

  const onChange = ({name, value}) => {
    setJustSignedUp(false)
    setForm({...form, [name]: value})
  }

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  )
}

export default Login
