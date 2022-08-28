import React from 'react'
import { Text, View } from '../../components/Themed'
import styles from './DisclaimerScreen.style'
import { TouchableOpacity } from 'react-native'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const DisclaimerScreen = () => {
  const dispatch = useAppDispatch()
  const onPress = () => {
    dispatch(changePage('disclaimer'))
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Play while sitting down and Hold phone in the upright position!
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default DisclaimerScreen
