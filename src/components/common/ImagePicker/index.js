import {View, Text, TouchableOpacity} from 'react-native'
import React, {forwardRef} from 'react'
import styles from './styles'
import RBSheet from 'react-native-raw-bottom-sheet'
import Icon from '../Icon'
import colors from '../../../assets/theme/colors'
import ImagePickerCropper from 'react-native-image-crop-picker'
import CustomText from '../CustomText'

const ImagePicker = forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon name="camera" color={colors.darkGrey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images)
          })
          .catch(error => {
            console.log('error ', error)
          })
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.darkGrey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images)
          })
          .catch(error => {
            console.log('error ', error)
          })
      },
    },
  ]

  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: colors.grey,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOptions}
            key={name}>
            {icon}
            <CustomText style={styles.text}>{name}</CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  )
})

export default ImagePicker
