import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default StyleSheet.create({
  tapBorder: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: 100,
    height: 100,
    borderColor: colors.DEFAULT_BLACK,
    borderWidth: 2,
    borderRadius: 120
  },
  tapButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 75,
    height: 75,
    backgroundColor: colors.DEFAULT_BLACK,
    borderRadius: 100
  }
})
