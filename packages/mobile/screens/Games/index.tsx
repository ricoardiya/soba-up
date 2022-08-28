import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { startGameOneAction } from '../../store/actions/gameActions'
import { useEffect } from 'react'
import { View } from 'react-native-animatable'
import GameOne from '../GameOne'
import GameTwo from '../GameTwo'
import GameThree from '../GameThree'
import { Text } from 'react-native'

export default function Games() {
  const gameReducers = useAppSelector(state => state.gameReducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameOneAction())
  }, [])

  console.log(gameReducers.currentGame)
  return (
    <View style={{ flex: 1, marginTop: 50, paddingBottom: 100 }}>
      {gameReducers.currentGame === 1 && <GameOne />}
      {gameReducers.currentGame === 2 && <GameTwo />}
      {gameReducers.currentGame === 3 && <GameThree />}
      {gameReducers.isEndGame && <Text>End Game</Text>}
    </View>
  )
}
