import {useNavigation} from '@react-navigation/native'
import React, {createRef, useContext, useRef, useState} from 'react'
import {Text, View} from 'react-native'
import CreateContactComponent from '../../components/CreateContactComponent'
import {CONTACT_LIST} from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import {GlobalContext} from '../../context/Provider'

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error, data},
    },
  } = useContext(GlobalContext)
  const [form, setForm] = useState({})
  const {navigate} = useNavigation()
  const sheetRef = useRef(null)
  const [localFile, setLocalFile] = useState(null)

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open()
    }
  }

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close()
    }
  }

  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value})
  }

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST)
    })
  }

  const toogleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite})
  }

  const onFileSelected = image => {
    closeSheet()
    setLocalFile(image)
    console.log('image ', image)
  }

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      loading={loading}
      error={error}
      toogleValueChange={toogleValueChange}
      sheetRef={sheetRef}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  )
}

export default CreateContact
