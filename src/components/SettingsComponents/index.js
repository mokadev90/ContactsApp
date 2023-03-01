import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Container from '../common/Container'
import colors from '../../assets/theme/colors'
import AppModal from '../common/AppModal'
import Icon from '../common/Icon'

const SettingsComponents = ({
  modalVisible,
  setModalVisible,
  settingsOptions,
  prefArray,
}) => {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        modalFooter={<></>}
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {prefArray.map(({name, selected, onPress}) => (
              <View>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}>
                  {selected && <Icon name="check" size={17} />}
                  <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        title="Sort by"
        setModalVisible={setModalVisible}
      />
      <ScrollView style={{backgroundColor: colors.darkGrey}}>
        {settingsOptions.map(({title, subtitle, onPress}, index) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subtitle && (
                <Text style={{fontSize: 14, opacity: 0.6, paddingTop: 5}}>
                  {subtitle}
                </Text>
              )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )
}

export default SettingsComponents
