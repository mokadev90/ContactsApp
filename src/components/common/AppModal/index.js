import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native'
import Icon from '../Icon'
import styles from './styles'
import PropTypes from 'prop-types'
import CustomText from '../CustomText'

const AppModal = ({
  title,
  modalBody,
  modalFooter,
  modalVisible,
  setModalVisible,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        onPress={() => {
          if (closeOnTouchOutside) setModalVisible(false)
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false)
                }}>
                <Icon size={27} name="close" type="evil" />
              </TouchableOpacity>
              <CustomText style={styles.title}>
                {title || 'RNContacts'}
              </CustomText>
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View>
                <View style={styles.footerSeparator} />
                <View style={styles.footerItems}>
                  <View style={styles.footer}>
                    <CustomText style={styles.footerText}>
                      Privacy Policy
                    </CustomText>
                    <View style={styles.termsView} />
                    <CustomText style={styles.footerText}>
                      Terms of Service
                    </CustomText>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
}

AppModal.defaultProps = {
  closeOnTouchOutside: true,
}

export default AppModal
