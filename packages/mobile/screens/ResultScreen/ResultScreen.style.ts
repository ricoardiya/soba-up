import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#de6fa1',
    padding: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textBlock: {
    top: '10%'
  },
  button: {
    color: 'white',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'white',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'white'
  },

  buttonContainer: {
    top: 10
  }
})
