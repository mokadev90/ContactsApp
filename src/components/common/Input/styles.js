import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  textInput: {
    // height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: 'red',
    flex: 1,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    marginTop: 4,
    fontSize: 12,
  },
});
