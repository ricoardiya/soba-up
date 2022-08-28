import React from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import styles from './LoginScreen.style'

const LoginScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../HomeScreen/squiggly.png')}
          style={styles.bgImage}
        />
        <Image
          source={require('../../components/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputTextContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen