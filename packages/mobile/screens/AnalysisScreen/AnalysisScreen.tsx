import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import { useAppSelector } from '../../store/hooks'
import styles from './AnalysisScreen.style'

const AnalysisScreen = () => {
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
      <Text style={styles.text}>Game 1: ${gameOneAccuracy} %</Text>
      <Text style={styles.text}>Game 2: {gameTwoAccuracy} %</Text>
      <Text style={styles.text}>Game 3: {gameThreeAccuracy} %</Text>
      <Text style={styles.text}>Your Accuracy: {totalAccuracy} %</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AnalysisScreen
