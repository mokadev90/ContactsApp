import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import React from 'react'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'
import Message from '../common/Message'
import colors from '../../assets/theme/colors'
import Icon from '../common/Icon'
import styles from './styles'
import {CONTACT_DETAILS, CREATE_CONTACT} from '../../constants/routeNames'
import {useNavigation} from '@react-navigation/native'
import CustomText from '../common/CustomText'

const ContactsComponent = ({
  sortBy,
  data,
  loading,
  modalVisible,
  setModalVisible,
}) => {
  const {navigate} = useNavigation()
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    )
  }

  const renderItem = ({item}) => {
    const {firstName, lastName, phoneNumber, contactPicture, countryCode} = item

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigate(CONTACT_DETAILS, {item})}>
        <View style={styles.item}>
          {contactPicture ? (
            <Image
              source={{uri: contactPicture}}
              style={{width: 45, height: 45, borderRadius: 100}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                borderRadius: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText style={styles.name}>{firstName?.[0]}</CustomText>
              <CustomText style={styles.name}>{lastName?.[0]}</CustomText>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row', gap: 2}}>
              <CustomText style={styles.name}>{firstName}</CustomText>
              <CustomText style={styles.name}>{lastName}</CustomText>
            </View>
            <CustomText
              style={
                styles.phoneNumber
              }>{`${countryCode} ${phoneNumber}`}</CustomText>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <View style={{flexGrow: 1}}>
        {/* <AppModal
          title="My Profile"
          modalBody={
            <View>
              <CustomText>Hello from the modal</CustomText>
            </View>
          }
          modalFooter={<></>}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        /> */}
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              renderItem={renderItem}
              data={
                sortBy
                  ? data.sort((a, b) => {
                      if (sortBy === 'First Name') {
                        if (b.firstName > a.firstName) {
                          return -1
                        } else {
                          return 1
                        }
                      }
                      if (sortBy === 'Last Name') {
                        if (b.lastName > a.lastName) {
                          return -1
                        } else {
                          return 1
                        }
                      }
                    })
                  : data
              }
              ItemSeparatorComponent={
                <View
                  style={{height: 0.5, backgroundColor: colors.grey}}></View>
              }
              keyExtractor={item => String(item._id)}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<View style={{height: 150}}></View>}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigate(CREATE_CONTACT)}
        style={styles.floatingActionButton}>
        <Icon type="octicons" name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  )
}

export default ContactsComponent
