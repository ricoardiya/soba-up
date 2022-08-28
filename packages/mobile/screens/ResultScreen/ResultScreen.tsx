import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../store/hooks'
import styles from './ResultScreen.style'

const ResultScreen = () => {
  const gameOneScore = useAppSelector(state => state.gameOneReducers.score)
  const gameOneNumTry = useAppSelector(state => state.gameOneReducers.level)
  const gameTwoScore = useAppSelector(state => state.gameTwoReducers.score)
  const gameTwoNumTry = useAppSelector(state => state.gameTwoReducers.level)
  const gameThreeNumCorrect = useAppSelector(
    state => state.gameThreeReducer.numCorrect
  )
  const gameThreeNumBlur = useAppSelector(
    state => state.gameThreeReducer.numBlur
  )
  const gameThreeNumWrong = useAppSelector(
    state => state.gameThreeReducer.numWrong
  )

  const gameOneAccuracy = Math.floor(gameOneScore / gameOneNumTry) * 100
  const gameTwoAccuracy = Math.floor(gameTwoScore / gameTwoNumTry) * 100
  const gameThreeAccuracy =
    Math.floor((gameThreeNumCorrect - gameThreeNumWrong) / gameThreeNumBlur) *
    100

  const totalAccuracy = Math.floor(
    gameOneAccuracy + gameTwoAccuracy + gameThreeAccuracy / 300
  )

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        From the results, our app suggests that you:{' '}
      </Text>
      {totalAccuracy > 70 ? (
        <View style={styles.textBlock}>
          <Text style={styles.text}>Pass the sobriety test!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Analysis</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.textBlock}>
          <Text style={styles.text}>Didn't pass the sobriety test!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default ResultScreen
