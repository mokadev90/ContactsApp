import {Image, Text, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, REGISTER} from '../../constants/routeNames';

const RegisterComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to ContactsApp</Text>
        <Text style={styles.subtitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input label="Username" placeholder="Enter username" />
          <Input label="First name" placeholder="Enter first name" />
          <Input label="Last name" placeholder="Enter last name" />
          <Input label="Email" placeholder="Enter email" />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
