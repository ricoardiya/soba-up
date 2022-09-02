import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#de6fa1',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    top: '25%'
  },
  textContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    color: '#de6fa1',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#de6fa1',
    width: 300,
    padding: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#de6fa1'
  },

  buttonContainer: {
    top: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  }
})
