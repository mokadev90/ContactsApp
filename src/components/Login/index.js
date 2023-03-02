import {Image, Text, View, TouchableOpacity} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {REGISTER} from '../../constants/routeNames'
import Message from '../common/Message'
import {useState} from 'react'
import CustomText from '../common/CustomText'

const LoginComponent = ({
  form,
  error,
  justSignedUp,
  onChange,
  onSubmit,
  loading,
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
        <CustomText style={styles.subtitle}>Please login here</CustomText>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              success
              onDismiss={() => {}}
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid credentials"
            />
          )}
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
            value={form.username || null}
            onChangeText={value => {
              onChange({name: 'username', value})
            }}
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
          />
          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            primary
            title="Submit"
          />
          <View style={styles.createSection}>
            <CustomText style={styles.infoText}>Need a new account?</CustomText>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER)
              }}>
              <CustomText style={styles.linkBtn}>Register</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default LoginComponent
