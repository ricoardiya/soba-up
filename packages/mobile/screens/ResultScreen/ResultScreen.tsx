import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../../store/hooks'
import styles from './ResultScreen.style'
import { useAppDispatch } from '../../store/hooks'
import { changePage } from '../../store/actions/appActions'

const ResultScreen = () => {
  const dispatch = useAppDispatch()
  const onPressAnalysis = () => {
    dispatch(changePage('analysis'))
  }

  const onPressNextStep = () => {
    dispatch(changePage('nextStep'))
  }

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

  const gameOneAccuracy = Math.round((gameOneScore / gameOneNumTry) * 100)
  const gameTwoAccuracy = Math.round((gameTwoScore / gameTwoNumTry) * 100)
  const gameThreeAccuracy = Math.round(
    ((gameThreeNumCorrect - gameThreeNumWrong) / gameThreeNumBlur) * 100
  )

  const totalAccuracy = Math.round(
    (gameOneAccuracy + gameTwoAccuracy + gameThreeAccuracy) / 3
  )

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          From the results, our app suggests that you:{' '}
        </Text>
      </View>
      {totalAccuracy > 70 ? (
        <View style={styles.textBlock}>
          <Text style={styles.text}>Pass the sobriety test!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPressAnalysis}>
              <Text style={styles.buttonText}>Analysis</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.textBlock}>
          <Text style={styles.text}>Didn't pass the sobriety test!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPressAnalysis}>
              <Text style={styles.buttonText}>Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressNextStep}>
              <Text style={styles.buttonText}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default ResultScreen
