import React, { useEffect } from 'react'
import { View } from '../../components/Themed'
import styles from './index.style'
import TimeBar from './TimeBar'
import Grid from './Grid'
import Done from '../../components/Done'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  startGameThreeAction,
  startTimerAction
} from '../../store/actions/gameThreeActions'
import { Text } from 'react-native'

export default function GameThree() {
  const gameThreeState = useAppSelector(state => state.gameThreeReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameThreeAction())
    // dispatch(startTimerAction())
  }, [])

  return (
    <View style={styles.container}>
      {gameThreeState.isGameRunning && (
        <>
          {/* <TimeBar/> */}
          <Grid circleProps={gameThreeState.circleProps} />
          <Text style={[styles.text]}>Tap and remove the blurry circles!</Text>
          <Done />
        </>
      )}
      {!gameThreeState.isGameRunning && (
        <>
          <Text>your score is {gameThreeState.score}</Text>
        </>
      )}
    </View>
  )
}
