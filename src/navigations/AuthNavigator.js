import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
