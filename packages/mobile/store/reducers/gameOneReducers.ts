import { createReducer } from '@reduxjs/toolkit'
import {
  increaseScoreGameOneAction,
  nextLevelGameOneAction,
  startGameOneAction,
  startTimerAction
} from '../actions/gameOneActions'
import randomUtils from '../utils/randomUtils'

interface GameOneState {
  isGameRunning: boolean
  score: number
  level: number
  targetPos: number
  decoyPos1: number
  decoyPos2: number
}

export const initialGameOneState: GameOneState = {
  isGameRunning: false,
  score: 0,
  level: 1,
  targetPos: 0,
  decoyPos1: 0,
  decoyPos2: 0
}

export const gameOneReducers = createReducer(initialGameOneState, builder => {
  builder
    .addCase(startGameOneAction, (state, action) => {
      state.score = 0
      state.level = 1
      state.targetPos = randomUtils.getRandomInt(4)
      state.decoyPos1 = randomUtils.getRandomInt(4)
      state.decoyPos2 = randomUtils.getRandomInt(4)
      state.isGameRunning = true
    })
    .addCase(startTimerAction.fulfilled, (state, action) => {
      state.isGameRunning = false
    })
    .addCase(nextLevelGameOneAction, (state, action) => {
      state.targetPos = randomUtils.getRandomInt(4)
      state.decoyPos1 = randomUtils.getRandomInt(4)
      state.decoyPos2 = randomUtils.getRandomInt(4)
      state.level++
    })
    .addCase(increaseScoreGameOneAction, (state, action) => {
      state.score++
    })
})
