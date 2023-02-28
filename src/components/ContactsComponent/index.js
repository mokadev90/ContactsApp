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
import {CREATE_CONTACT} from '../../constants/routeNames'
import {useNavigation} from '@react-navigation/native'

const ContactsComponent = ({data, loading, modalVisible, setModalVisible}) => {
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
      <TouchableOpacity style={styles.itemContainer}>
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
              <Text style={styles.name}>{firstName[0]}</Text>
              <Text style={styles.name}>{lastName[0]}</Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row', gap: 2}}>
              <Text style={styles.name}>{firstName}</Text>
              <Text style={styles.name}>{lastName}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${countryCode} ${phoneNumber}`}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <View style={{backgroundColor: colors.darkGrey, flexGrow: 1}}>
        <AppModal
          title="My Profile"
          modalBody={
            <View>
              <Text>Hello from the modal</Text>
            </View>
          }
          modalFooter={<></>}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        {loading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!loading && (
          <View style={[{paddingVertical: 20}]}>
            <FlatList
              renderItem={renderItem}
              data={data}
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
