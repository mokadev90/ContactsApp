import AsyncStorage from '@react-native-async-storage/async-storage'
import {NavigationContainer} from '@react-navigation/native'
import {useContext, useEffect, useState} from 'react'
import {ActivityIndicator} from 'react-native'
import {GlobalContext} from '../context/Provider'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'
import {navigationRef} from './SideMenu/RootNavigator'

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext)
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn)
  const [authLoaded, setAuthLoaded] = useState(false)

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      if (user) {
        setAuthLoaded(true)
        setIsAuthenticated(true)
      } else {
        setAuthLoaded(true)
        setIsAuthenticated(false)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getUser()
  }, [isLoggedIn])

  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  )
}

export default AppNavContainer
