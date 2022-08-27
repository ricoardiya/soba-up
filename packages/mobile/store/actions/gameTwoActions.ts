import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import timeUtils from '../utils/timeUtils'
import timings from '../../config/timings'

export const startGameTwoAction = createAction('START_GAME_TWO')
export const nextLevelGameTwoAction = createAction('NEXT_LEVEL_GAME_TWO')
export const clearColorsGameTwoAction = createAction('CLEAR_COLORS_GAME_TWO')
export const increaseScoreGameTwoAction = createAction(
  'INCREASE_SCORE_GAME_TWO'
)

export const startTimerAction = createAsyncThunk(
  'gameTwoReducer/startTimer',
  async () => {
    await timeUtils.delay(timings.TIME_LIMIT_MS)
  }
)
