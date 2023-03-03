import {useNavigation, useRoute} from '@react-navigation/native'
import React, {createRef, useContext, useEffect, useRef, useState} from 'react'
import {Text, View} from 'react-native'
import CreateContactComponent from '../../components/CreateContactComponent'
import {CONTACT_DETAILS, CONTACT_LIST} from '../../constants/routeNames'
import createContact from '../../context/actions/contacts/createContact'
import editContact from '../../context/actions/contacts/editContact'
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
  const {navigate, setOptions} = useNavigation()
  const [uploading, setIsUploading] = useState(false)
  const sheetRef = useRef(null)
  const [localFile, setLocalFile] = useState(null)
  const {params} = useRoute()

  useEffect(() => {
    if (params?.contact) {
      setOptions({title: 'Update contact'})
      setForm({...params.contact})
      if (params.contact.contactPicture) {
        setLocalFile(params.contact.contactPicture)
      }
    }
  }, [])

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
    if (params?.contact) {
      if (localFile?.size) {
        setIsUploading(true)
        uploadImage(localFile)(url => {
          console.log('entré al onSuccess')
          setIsUploading(false)
          console.log('form ', form)
          console.log('params.contact._id ', params.contact._id)
          editContact(
            {...form, contactPicture: url},
            params.contact._id,
          )(contactsDispatch)(item => {
            console.log('item ', item)
            navigate(CONTACT_DETAILS, {item})
          })
        })(error => {
          setIsUploading(false)
          console.log('error ', error)
        })
      } else {
        console.log('form ', form)
        console.log('params.contact._id ', params.contact._id)
        editContact(form, params.contact._id)(contactsDispatch)(item => {
          console.log('item ', item)
          navigate(CONTACT_DETAILS, {item})
        })
      }
    } else {
      if (localFile?.size) {
        setIsUploading(true)
        uploadImage(localFile)(url => {
          console.log('entré al onSuccess')
          setIsUploading(false)
          console.log('form ', form)
          createContact({...form, contactPicture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST)
            },
          )
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
