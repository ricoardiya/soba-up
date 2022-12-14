import React, { useEffect } from 'react'
import { View } from '../../components/Themed'
import styles from './index.style'
import TimeBar from '../../components/TimeBar'
import Grid from './Grid'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Text } from 'react-native'
import { startGameOneAction } from '../../store/actions/gameOneActions'
import { startTimerAction } from '../../store/actions/gameActions'

export default function GameOne() {
  const gameOneState = useAppSelector(state => state.gameOneReducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameOneAction())
    dispatch(startTimerAction())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.timebar}>
        <TimeBar />
      </View>
      <Grid
        targetPos={gameOneState.targetPos}
        decoyPos1={gameOneState.decoyPos1}
        decoyPos2={gameOneState.decoyPos2}
      />
    </View>
  )
}
