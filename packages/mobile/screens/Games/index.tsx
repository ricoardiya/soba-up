import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { startGameOneAction } from '../../store/actions/gameActions'
import { useEffect } from 'react'
import { View } from 'react-native-animatable'
import GameOne from '../GameOne'
import GameTwo from '../GameTwo'
import GameThree from '../GameThree'
import { Text } from 'react-native'
import ResultScreen from '../ResultScreen/ResultScreen'

const Games = () => {
  const gameState = useAppSelector(state => state.gameReducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameOneAction())
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {gameState.currentGame === 1 && <GameOne />}
      {gameState.currentGame === 2 && <GameTwo />}
      {gameState.currentGame === 3 && <GameThree />}
      {gameState.isEndGame && <ResultScreen />}
    </View>
  )
}

export default Games
