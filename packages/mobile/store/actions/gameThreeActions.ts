import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import timeUtils from '../utils/timeUtils'
import timings from '../../config/timings'

export const startGameThreeAction = createAction('START_GAME_THREE')
export const toogleCircle = createAction('TOOGLE_CIRCLE', (idx: string) => {
  return {
    payload: {
      idx: idx
    }
  }
})
export const finishGame = createAction('FINISH_GAME')

export const startTimerAction = createAsyncThunk(
  'gameThreeReducer/startTimer',
  async () => {
    await timeUtils.delay(timings.TIME_LIMIT_MS)
  }
)
