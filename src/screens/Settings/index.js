import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import SettingsComponents from '../../components/SettingsComponents'

const Settings = () => {
  const [email, setEmail] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState(null)

  const saveSetting = ({key, value}) => {
    AsyncStorage.setItem(key, value)
  }

  const settingsOptions = [
    {
      title: 'My Info',
      subtitle: 'Setup your profile',
      onPress: () => {},
    },
    {
      title: 'Accounts',
      subtitle: null,
      onPress: () => {},
    },
    {
      title: 'Default account for new contacts',
      subtitle: email,
      onPress: () => {},
    },
    {
      title: 'Contacts to display',
      subtitle: 'All contacts',
      onPress: () => {},
    },
    {
      title: 'Sort by',
      subtitle: sortBy,
      onPress: () => {
        setModalVisible(true)
      },
    },
    {
      title: 'Name format',
      subtitle: 'First name first',
      onPress: () => {},
    },
    {
      title: 'Import',
      subtitle: null,
      onPress: () => {},
    },
    {
      title: 'Export',
      subtitle: null,
      onPress: () => {},
    },
    {
      title: 'Blocked numbers',
      subtitle: null,
      onPress: () => {},
    },
    {
      title: 'About Contacts',
      subtitle: null,
      onPress: () => {},
    },
  ]

  const prefArray = [
    {
      name: 'First name',
      selected: sortBy === 'First name',
      onPress: () => {
        saveSetting('sortBy', 'First Name')
        setSortBy('First name')
        setModalVisible(false)
      },
    },
    {
      name: 'Last name',
      selected: sortBy === 'Last name',
      onPress: () => {
        saveSetting('sortBy', 'Last Name')
        setSortBy('Last name')
        setModalVisible(false)
      },
    },
  ]

  const getSettings = async () => {
    const user = await AsyncStorage.getItem('user')
    setEmail(JSON.parse(user).email)

    const sortPref = await AsyncStorage.getItem('sortBy')
    if (sortPref) setSortBy(sortPref)
  }

  useEffect(() => {
    getSettings()
  }, [])

  return (
    <SettingsComponents
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      settingsOptions={settingsOptions}
      prefArray={prefArray}
    />
  )
}

export default Settings
