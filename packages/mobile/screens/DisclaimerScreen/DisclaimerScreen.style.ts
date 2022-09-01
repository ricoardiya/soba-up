import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#de6fa1',
    textAlign: 'left'
  },
  button: {
    color: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    width: '100%',
    padding: 20,
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
  }
})
