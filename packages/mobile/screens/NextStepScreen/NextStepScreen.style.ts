import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  header: {
    color: '#de6fa1',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  secondHeader: {
    color: '#de6fa1',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    top: '25%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  thirdHeader: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    top: '25%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textBlockContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textBlockLastContainer: {
    marginTop: 40,
    marginBottom: 40
  },
  button: {
    color: '#de6fa1',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#de6fa1',
    width: '100%',
    padding: 10,
    marginTop: 10,
    maxWidth: 500,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  firstButton: {
    color: 'white',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#de6fa1',
    backgroundColor: '#de6fa1',
    width: '100%',
    padding: 10,
    marginTop: 10,
    maxWidth: 500,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#de6fa1'
  },
  firstButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: 'white'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
