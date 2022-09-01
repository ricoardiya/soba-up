import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Themed'
import styles from './WelcomeScreen.style'
import { changePage } from '../../store/actions/appActions'
import { useAppDispatch } from '../../store/hooks'

const WelcomeScreen = () => {
  const dispatch = useAppDispatch()
  const onPressDisclaimer = () => {
    dispatch(changePage('disclaimer'))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressDisclaimer}>
        <Image
          source={require('../HomeScreen/squiggly.png')}
          style={styles.bgImage}
        />
        <Image
          source={require('../../components/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.header}>Welcome to Soba Up!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen
