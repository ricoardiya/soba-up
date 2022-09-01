import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '../../components/Themed'
import styles from './NextStepScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const NextStepScreen = () => {
  const dispatch = useAppDispatch()
  const onPressGame = () => {
    dispatch(changePage('game'))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>What we are going to do for you.</Text>
      </View>
      <View style={styles.textBlockContainer}>
        <Text style={styles.secondHeader}>Text Your Emergency Contact(s)</Text>
        <Text style={styles.thirdHeader}>
          We will be sending your saved messages to your emergency contacts
        </Text>
      </View>
      <View style={styles.textBlockContainer}>
        <Text style={styles.secondHeader}>Share Location</Text>
        <Text style={styles.thirdHeader}>
          We are now going to share your location with your saved emergency
          contacts
        </Text>
      </View>
      <View style={styles.textBlockLastContainer}>
        <Text style={styles.secondHeader}>SOBA UP!</Text>
        <Text style={styles.thirdHeader}>Be Safe On A Night Out</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.firstButton}>
          <Text style={styles.firstButtonText}>Call Ride Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Call Emergency Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressGame}>
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NextStepScreen
