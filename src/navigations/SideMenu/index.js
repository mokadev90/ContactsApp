import {
  View,
  Alert,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Container from '../../components/common/Container'
import styles from './styles'
import {SETTINGS} from '../../constants/routeNames'
import logout from '../../context/actions/auth/logout'
import Icon from '../../components/common/Icon'

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.toggleDrawer()
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          logout()(authDispatch)
        },
      },
    ])
  }

  const menuItems = [
    {
      icon: <Icon type="material" size={17} name="settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS)
      },
    },
    {
      icon: <Icon type="material" size={17} name="logout" />,
      name: 'Logout',
      onPress: handleLogout,
    },
  ]

  return (
    <SafeAreaView>
      <Container>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logo.png')}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default SideMenu
