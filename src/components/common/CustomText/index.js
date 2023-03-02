import {useState} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const CustomText = ({style, children, ...props}) => (
  <Text style={{color: 'black', ...style}} {...props}>
    {children}
  </Text>
)

export default CustomText
