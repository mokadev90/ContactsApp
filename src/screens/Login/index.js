import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={text => setValue(text)}
        value={value}
        // error={'This field is required'}
      />
      <Input
        label="Password"
        onChangeText={text => setValue(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
