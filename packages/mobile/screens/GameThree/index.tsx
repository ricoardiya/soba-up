import React, { useEffect } from 'react'
import { View } from '../../components/Themed'
import styles from './index.style'
import TimeBar from '../../components/TimeBar'
import Grid from './Grid'
import Done from '../../components/Done'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  finishGame,
  startGameThreeAction
} from '../../store/actions/gameThreeActions'
import { Text } from 'react-native'
import { startTimerAction } from '../../store/actions/gameActions'

export default function GameThree() {
  const gameThreeState = useAppSelector(state => state.gameThreeReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const startTimer = async () => {
      await dispatch(startTimerAction())
      dispatch(finishGame())
    }
    dispatch(startGameThreeAction())
    startTimer()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.timebar}>
        <TimeBar />
      </View>
      <View style={styles.grid}>
        <Grid circleProps={gameThreeState.circleProps} />
      </View>
      <View style={styles.buttonContainers}>
        <Text style={styles.text}>Tap and remove the blurry circles!</Text>
      </View>
    </View>
  )
}
