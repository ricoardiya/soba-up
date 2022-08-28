import React from 'react'
import { Image, Text } from 'react-native'
import { View } from '../../components/Themed'
import styles from './WelcomeScreen.style'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../HomeScreen/squiggly.png')}
        style={styles.bgImage}
      />
      <Image
        source={require('../../components/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.header}>Welcome to Soba Up!</Text>
    </View>
  )
}

export default WelcomeScreen
