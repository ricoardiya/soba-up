import {createReducer} from "@reduxjs/toolkit";
import {
    clearColorsGameTwoAction, increaseScoreGameTwoAction,
    nextLevelGameTwoAction,
    startGameTwoAction,
    startTimerAction
} from "../actions/gameTwoActions";
import colorsUtils from "../utils/colorsUtils";

interface GameTwoState {
    isGameRunning: boolean
    isEndGame: boolean,
    score: number,
    level: number,
    colors: Array<string>
}

export const initialGameTwoState: GameTwoState = {
    isGameRunning: false,
    isEndGame: false,
    score: 0,
    level: 1,
    colors: []
}

export const gameTwoReducers = createReducer(initialGameTwoState, (builder) => {
    builder
        .addCase(startGameTwoAction, (state, action) => {
            state.score = 0
            state.level = 1
            state.isGameRunning = true
            state.colors = colorsUtils.generateColors(colorsUtils.NUMBER_OF_COLORS)
        })
        .addCase(startTimerAction.fulfilled, (state, action) => {
            state.isGameRunning = false
        })
        .addCase(clearColorsGameTwoAction, (state, action) => {
            state.colors = []
        })
        .addCase(nextLevelGameTwoAction, (state, action) => {
            state.level++
            clearColorsGameTwoAction()
            state.colors = colorsUtils.generateColors(colorsUtils.NUMBER_OF_COLORS)
        })
        .addCase(increaseScoreGameTwoAction, (state, action) => {
            state.score++
        })
})
