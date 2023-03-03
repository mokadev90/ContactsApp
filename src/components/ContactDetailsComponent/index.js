import {View, ScrollView, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import CustomText from '../common/CustomText'
import ImageComponent from './ImageComponent'
import Icon from '../common/Icon'
import {useNavigation} from '@react-navigation/native'
import colors from '../../assets/theme/colors'
import {DEFAULT_IMAGE_URI} from '../../constants/general'
import CustomButton from '../common/CustomButton'
import {CREATE_CONTACT} from '../../constants/routeNames'

const ContactDetailsComponent = ({contact}) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    phoneCode,
    contactPicture,
    countryCode,
  } = contact

  const {navigate} = useNavigation()

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {contactPicture && <ImageComponent src={contactPicture} />}

        {!contactPicture && (
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <Image
              width={150}
              height={150}
              source={{uri: DEFAULT_IMAGE_URI}}
              style={styles.imageView}
            />
          </View>
        )}
        <View style={styles.content}>
          <CustomText style={styles.names}>
            {firstName + ' ' + lastName}
          </CustomText>
        </View>

        <View style={styles.hrLine} />

        <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <CustomText style={styles.middleCustomText}>Call</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <CustomText style={styles.middleCustomText}>CustomText</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <CustomText style={styles.middleCustomText}>Video</CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <CustomText>
              {phoneCode} {phoneNumber}
            </CustomText>
            <CustomText>Mobile</CustomText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true})
          }}
        />
      </View>
    </ScrollView>
  )
}

export default ContactDetailsComponent
