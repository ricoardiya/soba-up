import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
    top: '14%',
    left: '35%'
  },
  inputTextPink: {
    color: '#de6fa1',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#de6fa1',
    marginTop: 50
  },
  form: {
    marginTop: 100,
    paddingRight: 20,
    paddingLeft: 20
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
  button: {
    color: '#de6fa1',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#de6fa1',
    width: '100%',
    padding: 10,
    marginTop: 60
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#de6fa1'
  }
})
