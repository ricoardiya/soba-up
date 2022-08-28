import React from 'react'
import { View } from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { toogleCircle } from '../../store/actions/gameThreeActions'
import blurryUtils from '../../store/utils/blurryUtils'
import styles from './index.style'

export default function BlurCircle({
  circleProp,
  idx
}: {
  circleProp: string
  idx: string
}) {
  const gameThreeState = useAppSelector(state => state.gameThreeReducer)
  const dispatch = useAppDispatch()

  const onPress = () => {
    dispatch(toogleCircle(idx))
  }

  let styleCircle = []
  if (gameThreeState.circleClicked[parseInt(idx)] === 1) {
    styleCircle.push(styles.pinkBox)
    if (gameThreeState.circleProps[parseInt(idx)] === blurryUtils.BLUR) {
      styleCircle.push(styles.pinkBlurBox)
    }
  } else {
    styleCircle.push(styles.blackBox)
    if (gameThreeState.circleProps[parseInt(idx)] === blurryUtils.BLUR) {
      styleCircle.push(styles.blackBlurBox)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styleCircle} />
    </TouchableWithoutFeedback>
  )
}
