import {Image, Text, View, TouchableOpacity} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {LOGIN, REGISTER} from '../../constants/routeNames'
import Message from '../common/Message'
import {useState} from 'react'
import CustomText from '../common/CustomText'

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  data,
  errors,
}) => {
  const {navigate} = useNavigation()
  const [isSecureEntry, setIsSecureEntry] = useState(true)

  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <CustomText style={styles.title}>Welcome to ContactsApp</CustomText>
        <CustomText style={styles.subtitle}>Create a free account</CustomText>
        <View style={styles.form}>
          {error?.error && (
            <Message
              retry
              danger
              retryFn={() => {
                console.log('222, ', 222)
              }}
              message={error?.error}
            />
          )}
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'username', value})
            }}
            error={errors.username || error?.username?.[0]}
          />
          <Input
            label="First name"
            placeholder="Enter first name"
            onChangeText={value => {
              onChange({name: 'firstName', value})
            }}
            error={errors.firstName}
          />
          <Input
            label="Last name"
            placeholder="Enter last name"
            onChangeText={value => {
              onChange({name: 'lastName', value})
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter email"
            onChangeText={value => {
              onChange({name: 'email', value})
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <CustomText>{isSecureEntry ? 'Show' : 'Hide'}</CustomText>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value})
            }}
            error={errors.password}
          />
          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <CustomText style={styles.infoText}>Need a new account?</CustomText>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN)
              }}>
              <CustomText style={styles.linkBtn}>Login</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default RegisterComponent
