import {useState} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Message = ({onDismiss, retry, retryFn, style, success, info, primary, danger, message, error, onPress}) => {
  const [focused, setFocused] = useState(false)

  const [userDismissed, setUserDismissed] = useState(false)
  const getBgColor = () => {
    if (primary) {
      return colors.primary
    }
    if (info) {
      return colors.secondary
    }
    if (success) {
      return colors.success
    }
    if (danger) {
      return colors.danger
    } else {
      return colors.grey
    }
  }

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setUserDismissed(true)
                  onDismiss()
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  )
}

export default Message
