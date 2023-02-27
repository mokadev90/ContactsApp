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

const ContactsComponent = ({data, loading, modalVisible, setModalVisible}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    )
  }

  const renderItem = ({item}) => {
    const {firstName, lastName, phoneNumber, contactPicture} = item

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
              }}></View>
          )}
          <View style={{flexDirection: 'row', gap: 2}}>
            <Text>{firstName}</Text>
            <Text>{lastName}</Text>
          </View>
          <Text>{phoneNumber}</Text>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    )
  }

  return (
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
            keyExtractor={item => String(item._id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}}></View>}
          />
        </View>
      )}
    </View>
  )
}

export default ContactsComponent
