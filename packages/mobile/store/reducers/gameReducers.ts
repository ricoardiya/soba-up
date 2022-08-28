import { createReducer } from '@reduxjs/toolkit'
import {
  startGameOneAction,
  startGameTwoAction,
  startGameThreeAction,
  startTimerAction
} from '../actions/gameActions'

interface GameState {
  currentGame: number
  numberOfGame: number
  isEndGame: boolean
}

export const initialGameState: GameState = {
  currentGame: 0,
  numberOfGame: 3,
  isEndGame: false
}

export const gameReducers = createReducer(initialGameState, builder => {
  builder
    .addCase(startGameOneAction, (state, action) => {
      state.currentGame = 1
      state.isEndGame = false
    })
    // .addCase(startGameTwoAction, (state, action) => {
    //   state.currentGame = 2
    // })
    // .addCase(startGameThreeAction, (state, action) => {
    //   state.currentGame = 3
    // })
    .addCase(startTimerAction.fulfilled, (state, action) => {
      if (state.currentGame === state.numberOfGame) {
        state.currentGame = 0
        state.isEndGame = true
      } else {
        state.isEndGame = false
        state.currentGame++
      }
    })
})
