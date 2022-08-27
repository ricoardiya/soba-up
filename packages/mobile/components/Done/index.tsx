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
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.box]}>
        <Text style={[styles.text]}>Done</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
