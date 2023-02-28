import {View, Text, Image} from 'react-native'
import React from 'react'
import Container from '../common/Container'
import Input from '../common/Input'
import styles from './styles'
import CustomButton from '../common/CustomButton'
import CountryPicker from 'react-native-country-picker-modal'
import {DEFAULT_IMAGE_URI} from '../../constants/general'

const CreateContactComponent = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Image source={{uri: DEFAULT_IMAGE_URI}} style={styles.imageView} />
        <Text style={styles.chooseText}>Choose image</Text>
        <Input label="First name" placeholder="Enter your First name" />
        <Input label="Last name" placeholder="Enter your Last name" />
        <Input
          icon={
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          style={{paddingLeft: 10}}
          iconPosition="left"
          label="Phone number"
          placeholder="Enter your Phone number"
        />
        <CustomButton primary title="Submit" />
      </Container>
    </View>
  )
}

export default CreateContactComponent
