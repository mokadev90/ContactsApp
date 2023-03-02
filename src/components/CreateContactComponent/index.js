import {View, Text, Image, Switch, TouchableOpacity} from 'react-native'
import React from 'react'
import Container from '../common/Container'
import Input from '../common/Input'
import styles from './styles'
import CustomButton from '../common/CustomButton'
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal'
import {DEFAULT_IMAGE_URI} from '../../constants/general'
import colors from '../../assets/theme/colors'
import ImagePicker from '../common/ImagePicker'
import CustomText from '../common/CustomText'

const CreateContactComponent = ({
  loading,
  error,
  onChangeText,
  setForm,
  onSubmit,
  toogleValueChange,
  form,
  sheetRef,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: localFile?.path || DEFAULT_IMAGE_URI}}
          style={styles.imageView}
        />
        <TouchableOpacity onPress={openSheet}>
          <CustomText style={styles.chooseText}>Choose image</CustomText>
        </TouchableOpacity>
        <Input
          label="First name"
          onChangeText={value => onChangeText({name: 'firstName', value})}
          placeholder="Enter your First name"
          error={error?.firstName}
        />
        <Input
          label="Last name"
          onChangeText={value => onChangeText({name: 'lastName', value})}
          placeholder="Enter your Last name"
          error={error?.lastName}
        />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              countryCode={form.countryCode || undefined}
              withCallingCode
              withCallingCodeButton
              withEmoji
              onSelect={v => {
                const phoneCode = v.callingCode[0]
                const cCode = v.cca2
                setForm({...form, countryCode: cCode, phoneCode})
              }}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone number"
          onChangeText={value => onChangeText({name: 'phoneNumber', value})}
          placeholder="Enter your Phone number"
          error={error?.phoneNumber}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <CustomText style={{fontSize: 17}}>Add to favorites</CustomText>
          <Switch
            trackColor={{false: '#767577', true: colors.primary}}
            thumbColor="#ffffff"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toogleValueChange}
            value={form.isFavorite}
          />
        </View>
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </Container>
      <ImagePicker ref={sheetRef} onFileSelected={onFileSelected} />
    </View>
  )
}

export default CreateContactComponent
