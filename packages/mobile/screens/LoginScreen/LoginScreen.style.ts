import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    zIndex: 2,
    backgroundColor: 'white',
    borderRadius: 250,
    top: '20%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  images: {
    flex: 1
  },
  button: {
    color: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    width: 300,
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
    marginTop: 60,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  inputTextContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  }
})
