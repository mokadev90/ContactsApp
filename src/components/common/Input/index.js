import {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import colors from '../../../assets/theme/colors'
import CustomText from '../CustomText'
import styles from './styles'

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false)

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row'
      } else if (iconPosition === 'right') {
        return 'row-reverse'
      }
    }
  }

  const getBorderColor = () => {
    if (error) {
      return colors.danger
    }
    if (focused) {
      return colors.primary
    } else {
      return colors.grey
    }
  }

  return (
    <View style={styles.inputContainer}>
      {label && <CustomText>{label}</CustomText>}
      <View
        style={[
          styles.wrapper,
          {
            alignItems: icon ? 'center' : 'baseline',
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
          },
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={colors.darkGrey}
          style={[styles.textInput, style]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          color={colors.darkGrey}
          {...props}
        />
      </View>
      {error && <CustomText style={styles.error}>{error}</CustomText>}
    </View>
  )
}

export default Input
