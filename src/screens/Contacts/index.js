import AsyncStorage from '@react-native-async-storage/async-storage'
import {useFocusEffect, useNavigation} from '@react-navigation/native'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/ContactsComponent'
import {CONTACT_DETAILS} from '../../constants/routeNames'
import getContacts from '../../context/actions/contacts/getContacts'
import {GlobalContext} from '../../context/Provider'

const Contacts = () => {
  const {setOptions, navigate, toggleDrawer} = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const contactsRef = useRef([])

  const {
    contactsState: {
      getContacts: {data, loading},
    },
    contactsDispatch,
  } = useContext(GlobalContext)

  useEffect(() => {
    getContacts()(contactsDispatch)
  }, [])

  useEffect(() => {
    const prev = contactsRef.current
    contactsRef.current = data
    const newList = contactsRef.current
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i._id).includes(item._id),
      )
      navigate(CONTACT_DETAILS, {item: newContact})
    }
  }, [data.length])

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
