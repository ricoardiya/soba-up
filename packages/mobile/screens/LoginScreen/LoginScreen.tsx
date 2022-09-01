import React from 'react'
import { Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import styles from './LoginScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const LoginScreen = () => {
  const dispatch = useAppDispatch()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const onPress = () => {
    dispatch(changePage('disclaimer'))
  }
  return (
    <View style={styles.container}>
      <View style={styles.images}>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen
