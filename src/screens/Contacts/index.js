import AsyncStorage from '@react-native-async-storage/async-storage'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/ContactsComponent'
import getContacts from '../../context/actions/contacts/getContacts'
import {GlobalContext} from '../../context/Provider'

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState(null)

  const {
    contactsState: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  } = useContext(GlobalContext)

  useEffect(() => {
    getContacts()(contactsDispatch)
  }, [])

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy')
    if (sortPref) {
      setSortBy(sortPref)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getSettings()

      return () => {}
    }, []),
  )

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer()
          }}>
          <Icon
            type="material"
            size={26}
            style={{padding: 10, paddingLeft: 0, color: 'black'}}
            name="menu"
          />
        </TouchableOpacity>
      ),
    })
  }, [])

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
      sortBy={sortBy}
    />
  )
}

export default Contacts
