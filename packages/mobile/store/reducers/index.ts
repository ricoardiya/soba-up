import { gameOneReducers } from './gameOneReducers'
import { gameTwoReducers } from './gameTwoReducers'
import { gameThreeReducer } from './gameThreeReducers'
import { appReducer } from './appReducers'

export const rootReducer = {
  reducer: {
    gameOneReducers,
    gameTwoReducers,
    gameThreeReducer,
    appReducer
  }
}
