import React from 'react'
import { Image } from 'react-native'
import { View } from '../../components/Themed'
import styles from './SplashScreen.style'

const SplashScreen = () => {
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
    </View>
  )
}

export default SplashScreen
