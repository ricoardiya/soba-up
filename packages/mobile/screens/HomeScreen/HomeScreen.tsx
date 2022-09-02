import React from 'react'
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity
} from 'react-native'
import { View } from '../../components/Themed'
import styles from './HomeScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const onPressLogIn = () => {
    dispatch(changePage('login'))
  }
  const onPressSignUp = () => {
    dispatch(changePage('signup'))
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.header}>soba up</Text>
        <TouchableOpacity style={styles.button} onPress={onPressLogIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassButton}>
          <Text style={styles.forgotPass}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen
