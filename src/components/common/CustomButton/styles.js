import {StyleSheet} from 'react-native'
import colors from '../../../assets/theme/colors'

export default StyleSheet.create({
  textInput: {
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: 'red',
    flex: 1,
    width: '100%',
  },
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    marginTop: 4,
    fontSize: 12,
  },
  loaderSection: {
    flexDirection: 'row',
  },
})
