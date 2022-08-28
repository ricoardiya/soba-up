import React from 'react'
import { Text, View } from 'react-native-animatable'
import { useAppDispatch } from '../../store/hooks'
import { TouchableWithoutFeedback } from 'react-native'
import { finishGame } from '../../store/actions/gameThreeActions'
import styles from './index.style'

export default function Done() {
  const dispatch = useAppDispatch()

  const onPress = () => {
    dispatch(finishGame())
  }

  return (
    <View style={styles.tapBorder}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.tapButton}>
          <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}>
            Done
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
