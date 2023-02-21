import {NavigationContainer} from '@react-navigation/native';
import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
  const isLoggedIn = true;
  const state = useContext(GlobalContext);
  console.log('🚀 ~ file: index.js:10 ~ AppNavContainer ~ state:', state);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
