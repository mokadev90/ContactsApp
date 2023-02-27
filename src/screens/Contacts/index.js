import {useNavigation} from '@react-navigation/native'
import React, {useContext, useEffect, useState} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import Icon from '../../components/common/Icon'
import ContactsComponent from '../../components/ContactsComponent'
import getContacts from '../../context/actions/contacts/getContacts'
import {GlobalContext} from '../../context/Provider'

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

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
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            console.log('toogle')
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
    />
  )
}

export default Contacts
