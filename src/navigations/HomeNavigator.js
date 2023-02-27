import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Text} from 'react-native'
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames'
import ContactDetail from '../screens/ContactDetail'
import Contacts from '../screens/Contacts'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator()
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
