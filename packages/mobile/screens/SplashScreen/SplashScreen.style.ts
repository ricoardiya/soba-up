import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '150%',
    zIndex: 1,
    position: 'absolute'
  },
  logo: {
    width: 200,
    height: 200,
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 200,
    left: '25%',
    top: '35%'
  }
})
