import {Image, Text, View, TouchableOpacity} from 'react-native'
import Container from '../common/Container'
import Input from '../common/Input'
import CustomButton from '../common/CustomButton'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import {REGISTER} from '../../constants/routeNames'
import Message from '../common/Message'
import {useState} from 'react'

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
        <Text style={styles.title}>Welcome to ContactsApp</Text>
        <Text style={styles.subtitle}>Please login here</Text>

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
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
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
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER)
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default LoginComponent
