import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import timeUtils from '../utils/timeUtils'
import timings from '../../config/timings'

export const startGameOneAction = createAction('START_GAME_ONE')
export const startGameTwoAction = createAction('START_GAME_TWO')
export const startGameThreeAction = createAction('START_GAME_THREE')

export const startTimerAction = createAsyncThunk(
  'gameReducer/startTimer',
  async () => {
    await timeUtils.delay(timings.TIME_LIMIT_MS)
  }
)
