import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '100%',
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
    top: '15%'
  },
  header: {
    fontFamily: 'Helvetica',
    fontSize: 58,
    marginTop: 435,
    fontWeight: 'bold',
    color: '#de6fa1',
    textAlign: 'center'
  }
})
