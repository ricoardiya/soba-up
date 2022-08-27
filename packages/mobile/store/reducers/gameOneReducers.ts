import {createReducer} from "@reduxjs/toolkit";
import {
    increaseScoreGameOneAction,
    nextLevelGameOneAction,
    startGameOneAction,
    startTimerAction
} from "../actions/gameOneActions";
import randomUtils from "../utils/randomUtils";

interface GameOneState {
  isGameRunning: boolean
  score: number,
  level: number,
  targetPos: number,
}

export const initialGameOneState: GameOneState = {
  isGameRunning: false,
  score: 0,
  level: 1,
  targetPos: 0
}

export const gameOneReducers = createReducer(initialGameOneState, (builder) => {
  builder
    .addCase(startGameOneAction, (state, action) => {
      state.score = 0
      state.level = 1
      state.isGameRunning = true
      state.targetPos = randomUtils.getRandomInt(4)
    })
    .addCase(startTimerAction.fulfilled, (state, action) => {
      state.isGameRunning = false
    })
    .addCase(nextLevelGameOneAction, (state, action) => {
      state.level++
      state.targetPos = randomUtils.getRandomInt(4)
    })
    .addCase(increaseScoreGameOneAction, (state, action) => {
      state.score++
    })
})
