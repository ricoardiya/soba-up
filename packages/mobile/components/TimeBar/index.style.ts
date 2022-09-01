import { StyleSheet } from 'react-native'
import colors from '../../config/colors'
import metrics from '../../config/metrics'

export default StyleSheet.create({
  container: {
    marginTop: 50
  },
  content: {
    backgroundColor: colors.PINK,
    // height: metrics.TIME_BAR_HEIGHT,
    height: metrics.TIME_BAR_HEIGHT,
    borderColor: colors.TRANSPARENT_DARK,
    borderWidth: 1
  }
})
