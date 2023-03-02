import {useState} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import colors from '../../../assets/theme/colors'
import CustomText from '../CustomText'
import styles from './styles'

const CustomButton = ({
  style,
  secondary,
  primary,
  danger,
  title,
  disabled,
  loading,
  error,
  onPress,
}) => {
  const [focused, setFocused] = useState(false)

  const getBgColor = () => {
    if (disabled) {
      return colors.grey
    }
    if (primary) {
      return colors.primary
    }
    if (secondary) {
      return colors.secondary
    }
    if (danger) {
      return colors.danger
    } else {
      return colors.grey
    }
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <CustomText
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton
