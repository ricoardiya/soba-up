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

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./squiggly.png')} style={styles.bgImage} />
        <Image
          source={require('../../components/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.header}>soba up</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
