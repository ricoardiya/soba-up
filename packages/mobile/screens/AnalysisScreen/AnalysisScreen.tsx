import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from '../../components/Themed'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import styles from './AnalysisScreen.style'
import { changePage } from '../../store/actions/appActions'

const AnalysisScreen = () => {
  const dispatch = useAppDispatch()
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

  const totalAccuracy = Math.floor(
    (gameOneAccuracy + gameTwoAccuracy + gameThreeAccuracy) / 3
  )
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Game 1: {gameOneAccuracy} %</Text>
        <Text style={styles.text}>Game 2: {gameTwoAccuracy} %</Text>
        <Text style={styles.text}>Game 3: {gameThreeAccuracy} %</Text>
        <Text style={styles.text}>
          Your Accuracy: {Math.round(totalAccuracy)} %
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressNextStep}>
          <Text style={styles.buttonText}>Next Step</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AnalysisScreen
