import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useContext, useEffect} from 'react'
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../../assets/theme/colors'
import CustomText from '../../components/common/CustomText'
import Icon from '../../components/common/Icon'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'
import {CONTACT_LIST} from '../../constants/routeNames'
import deleteContact from '../../context/actions/contacts/deleteContact'
import {GlobalContext} from '../../context/Provider'

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute()

  const {setOptions, navigate} = useNavigation()

  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext)

  useEffect(() => {
    if (item) {
      console.log(item.isFavorite)
      setOptions({
        title: item.firstName + ' ' + item.lastName,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10, gap: 10}}>
              <TouchableOpacity>
                <Icon
                  size={21}
                  type="material"
                  name={item.isFavorite ? 'star' : 'star-border'}
                  color={colors.darkGrey}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Delete!',
                    'Are you sure you want to delete it?',
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(item._id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST)
                          })
                        },
                      },
                    ],
                  )
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.darkGrey} />
                ) : (
                  <Icon
                    size={21}
                    type="material"
                    name="delete"
                    color={colors.darkGrey}
                  />
                )}
              </TouchableOpacity>
            </View>
          )
        },
      })
    }
  }, [item, loading])

  return <ContactDetailsComponent contact={item} />
}

export default ContactDetails
