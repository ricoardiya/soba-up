import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import timeUtils from '../utils/timeUtils'
import timings from '../../config/timings'

export const startGameOneAction = createAction('START_GAME_ONE')
export const nextLevelGameOneAction = createAction('NEXT_LEVEL_GAME_ONE')
export const increaseScoreGameOneAction = createAction(
  'INCREASE_SCORE_GAME_ONE'
)

export const startTimerAction = createAsyncThunk(
  'gameOneReducer/startTimer',
  async () => {
    await timeUtils.delay(timings.TIME_LIMIT_MS)
  }
)
