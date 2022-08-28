import { gameReducers } from './gameReducers'
import { gameOneReducers } from './gameOneReducers'
import { gameTwoReducers } from './gameTwoReducers'
import { gameThreeReducer } from './gameThreeReducers'
import { appReducer } from './appReducers'

export const rootReducer = {
  reducer: {
    gameReducers,
    gameOneReducers,
    gameTwoReducers,
    gameThreeReducer,
    appReducer
  }
}
