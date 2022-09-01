import React from 'react'
import { Text, View } from '../../components/Themed'
import styles from './DisclaimerScreen.style'
import { TouchableOpacity } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const DisclaimerScreen = () => {
  const dispatch = useAppDispatch()
  const onPress = () => {
    dispatch(changePage('games'))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Play while sitting down and Hold phone in the upright position!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>START GAME</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DisclaimerScreen
