import React from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import styles from './SignUpScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const SignUpScreen = () => {
  const dispatch = useAppDispatch()
  const onPress = () => {
    dispatch(changePage('emergencyContact'))
  }

  const [fullName, setFullName] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [streetAddress, setStreetAddress] = React.useState('')
  const [unitNumber, setUnitNumber] = React.useState('')
  const [postCode, setPostCode] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <View style={styles.container}>
      <Image
        source={require('../../components/logo.png')}
        style={styles.logo}
      />
      <View style={styles.form}>
        <TextInput
          onChangeText={setFullName}
          placeholder="Full Name"
          style={styles.inputTextPink}
        />
        <TextInput
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          style={styles.inputText}
        />
        <TextInput
          onChangeText={setStreetAddress}
          placeholder="Street Address"
          style={styles.inputText}
        />
        <TextInput
          onChangeText={setEmail}
          placeholder="Email Address"
          style={styles.inputText}
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          style={styles.inputText}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen
