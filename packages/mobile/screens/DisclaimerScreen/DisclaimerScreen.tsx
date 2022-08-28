import React from 'react'
import { Text, View } from '../../components/Themed'
import styles from './DisclaimerScreen.style'

const DisclaimerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Play while sitting down and Hold phone in the upright position!
      </Text>
    </View>
  )
}

export default DisclaimerScreen
