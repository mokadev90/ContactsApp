import {useNavigation} from '@react-navigation/native'
import React, {createRef, useContext, useRef, useState} from 'react'
import {Text, View} from 'react-native'
import CreateContactComponent from '../../components/CreateContactComponent'
import {CONTACT_LIST} from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import {GlobalContext} from '../../context/Provider'
import uploadImage from '../../helpers/uploadImage'

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error, data},
    },
  } = useContext(GlobalContext)
  const [form, setForm] = useState({})
  const {navigate} = useNavigation()
  const [uploading, setIsUploading] = useState(false)
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
    if (localFile?.size) {
      setIsUploading(true)
      uploadImage(localFile)(url => {
        console.log('entré al onSuccess')
        setIsUploading(false)
        createContact({...form, contactPicture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST)
        })
      })(error => {
        setIsUploading(false)
        console.log('error ', error)
      })
    } else {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST)
      })
    }
  }

  const toogleValueChange = () => {
    setForm({...form, isFavorite: !form.isFavorite})
  }

  const onFileSelected = image => {
    closeSheet()
    setLocalFile(image)
  }

  return (
    <CreateContactComponent
      form={form}
      setForm={setForm}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      loading={loading || uploading}
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
