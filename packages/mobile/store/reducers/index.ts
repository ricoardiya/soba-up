import { gameReducers } from './gameReducers'
import { gameOneReducers } from './gameOneReducers'
import { gameTwoReducers } from './gameTwoReducers'
import { gameThreeReducer } from './gameThreeReducers'

export const rootReducer = {
  reducer: {
    gameReducers,
    gameOneReducers,
    gameTwoReducers,
    gameThreeReducer
  }
}
