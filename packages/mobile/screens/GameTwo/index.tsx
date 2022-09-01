import React, { useEffect } from 'react'
import { View } from '../../components/Themed'
import styles from './index.style'
import TimeBar from '../../components/TimeBar'
import Grid from './Grid'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { startGameTwoAction } from '../../store/actions/gameTwoActions'
import { Text } from 'react-native'
import { startTimerAction } from '../../store/actions/gameActions'

export default function GameTwo() {
  const gameTwoState = useAppSelector(state => state.gameTwoReducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameTwoAction())
    dispatch(startTimerAction())
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.timebar}>
        <TimeBar />
      </View>
      <View style={styles.grid}>
        <Grid colors={gameTwoState.colors} />
      </View>
    </View>
  )
}
