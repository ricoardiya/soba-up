import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '180%',
    zIndex: 1,
    position: 'absolute'
  },
  logo: {
    width: 200,
    height: '50%',
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 200,
    left: '25%',
    top: '20%'
  },
  button: {
    color: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    width: '50%',
    padding: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 120,
    left: '23%'
  },
  header: {
    fontFamily: 'Helvetica',
    fontSize: 58,
    marginBottom: 10,
    color: '#de6fa1'
  },
  forgotPass: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    textAlign: 'center'
  },

  forgotPassButton: {
    color: 'black',
    width: '50%',
    padding: 10,
    marginBottom: 10
  }
})
