import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  bgImage: {
    width: '100%',
    height: '130%',
    zIndex: 1,
    position: 'absolute'
  },
  logo: {
    width: 200,
    height: '50%',
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    top: '20%'
  },
  button: {
    color: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    width: 170,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignSelf: 'center'
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
    width: '100%',
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
