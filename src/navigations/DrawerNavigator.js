import {createDrawerNavigator} from '@react-navigation/drawer'
import React, {useContext} from 'react'
import {Image, SafeAreaView, Text, View} from 'react-native'
import colors from '../assets/theme/colors'
import Container from '../components/common/Container'
import {HOME_NAVIGATOR} from '../constants/routeNames'
import {GlobalContext} from '../context/Provider'
import HomeNavigator from './HomeNavigator'
import SideMenu from './SideMenu'

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator()
  const {authDispatch} = useContext(GlobalContext)

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }
      drawerStyle={{backgroundColor: colors.darkBlue}}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
