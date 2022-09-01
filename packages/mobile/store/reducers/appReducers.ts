import { createReducer } from '@reduxjs/toolkit'
import { changePage } from '../actions/appActions'

interface AppState {
  page: string
}

export const initialAppState: AppState = {
  page: 'home'
}

export const appReducer = createReducer(initialAppState, builder => {
  builder.addCase(changePage, (state, action) => {
    state.page = action.payload.page
  })
})
