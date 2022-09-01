import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '120%',
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
  images: {
    flex: 1
  },
  button: {
    color: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    width: '50%',
    padding: 10,
    marginTop: 40
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center'
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  inputText: {
    color: '#de6fa1',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginTop: 60
  },
  inputTextContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
})
