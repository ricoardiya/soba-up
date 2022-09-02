import { createReducer } from '@reduxjs/toolkit'
import {
  startGameThreeAction,
  startTimerAction,
  toogleCircle,
  finishGame
} from '../actions/gameThreeActions'
import blurryUtils from '../utils/blurryUtils'

interface GameThreeState {
  isGameRunning: boolean
  isEndGame: boolean
  circleProps: Array<string>
  circleClicked: Array<number>
  numMissing: number
  numCorrect: number
  numBlur: number
  numWrong: number
}

export const initialGameThreeState: GameThreeState = {
  isGameRunning: false,
  isEndGame: false,
  circleProps: [],
  circleClicked: [],
  numMissing: 0,
  numCorrect: 0,
  numBlur: 0,
  numWrong: 0
}

export const gameThreeReducer = createReducer(
  initialGameThreeState,
  builder => {
    builder
      .addCase(startGameThreeAction, (state, action) => {
        state.isGameRunning = true
        state.circleProps = blurryUtils.generateBlurCircles(
          blurryUtils.NUMBER_OF_CIRCLES
        )
        state.circleClicked = Array(blurryUtils.NUMBER_OF_CIRCLES).fill(0)
      })
      .addCase(toogleCircle, (state, action) => {
        if (state.circleClicked[parseInt(action.payload.idx)] === 1) {
          state.circleClicked[parseInt(action.payload.idx)] = 0
        } else {
          state.circleClicked[parseInt(action.payload.idx)] = 1
        }
      })
      .addCase(finishGame, (state, action) => {
        for (let i = 0; i < blurryUtils.NUMBER_OF_CIRCLES; i++) {
          if (state.circleProps[i] === blurryUtils.BLUR) {
            state.numBlur += 1
            if (state.circleClicked[i] === 0) {
              state.numMissing += 1
            } else {
              state.numCorrect += 1
            }
          } else {
            if (state.circleClicked[i] === 1) {
              state.numWrong += 1
            }
          }
        }
        state.isGameRunning = false
      })
  }
)
