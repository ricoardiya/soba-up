import {createReducer} from "@reduxjs/toolkit";
import {
    increaseScoreGameOneAction,
    nextLevelGameOneAction,
    startGameOneAction,
    startTimerAction
} from "../actions/gameOneActions";

interface GameOneState {
    isGameRunning: boolean
    score: number,
    level: number,
}

export const initialGameOneState: GameOneState = {
    isGameRunning: false,
    score: 0,
    level: 1
}

export const gameOneReducers = createReducer(initialGameOneState, (builder) => {
    builder
        .addCase(startGameOneAction, (state, action) => {
            state.score = 0
            state.level = 1
            state.isGameRunning = true
        })
        .addCase(startTimerAction.fulfilled, (state, action) => {
            state.isGameRunning = false
        })
        .addCase(nextLevelGameOneAction, (state, action) => {
            state.level++
        })
        .addCase(increaseScoreGameOneAction, (state, action) => {
            state.score++
        })
})