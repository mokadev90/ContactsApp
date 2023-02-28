import AntDesign from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import FAIcon5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import ZocialIcon from 'react-native-vector-icons/Zocial'

const getIconFont = type => {
  switch (type) {
    case 'fontisto':
      return Fontisto

    case 'zocial':
      return ZocialIcon

    case 'octicons':
      return OcticonsIcon

    case 'material':
      return MaterialIcon

    case 'evil':
      return EvilIcon

    case 'feather':
      return Feather

    case 'ant':
      return AntDesign

    case 'simple-line':
      return SimpleLineIcon

    case 'foundation':
      return FoundationIcon

    case 'fa5':
      return FAIcon5

    case 'fa':
      return FAIcon

    case 'materialCommunity':
      return MaterialCommunityIcon

    case 'entypo':
      return EntypoIcon

    case 'ionicon':
      return Ionicon

    default:
      return MaterialIcon
  }
}

const Icon = ({type, ...props}) => {
  const FontIcon = getIconFont(type)

  return <FontIcon {...props} />
}

export default Icon
