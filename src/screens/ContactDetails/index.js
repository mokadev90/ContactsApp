import {useNavigation, useRoute} from '@react-navigation/native'
import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import colors from '../../assets/theme/colors'
import CustomText from '../../components/common/CustomText'
import Icon from '../../components/common/Icon'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'

const ContactDetails = () => {
  const {params: {item = {}} = {}} = useRoute()

  const {setOptions} = useNavigation()

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
              <TouchableOpacity>
                <Icon
                  size={21}
                  type="material"
                  name="delete"
                  color={colors.darkGrey}
                />
              </TouchableOpacity>
            </View>
          )
        },
      })
    }
  }, [item])

  return <ContactDetailsComponent contact={item} />
}

export default ContactDetails
