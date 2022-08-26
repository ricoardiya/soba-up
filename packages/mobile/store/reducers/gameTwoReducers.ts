import {createReducer} from "@reduxjs/toolkit";
import {
    clearColorsGameTwoAction, increaseScoreGameTwoAction,
    nextLevelGameTwoAction,
    startGameTwoAction,
    startTimerAction
} from "../actions/gameTwoActions";

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

const NUMBER_OF_COlORS = 15
const NUMBER_OF_RED = 1
const NUMBER_OF_BLUE = 3
const RED = 'red'
const WHITE = 'white'
const BLUE = 'blue'


const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}

const generateColors = (numberOfColors: number): Array<string> => {
    let colors: Array<string> = []
    let red = NUMBER_OF_RED
    let blue = NUMBER_OF_BLUE
    for (let i = 0; i < numberOfColors; i++) {
        // Make sure red is always in the grid
        if (i == numberOfColors - 1) {
            if (red > 0) {
                colors = [...colors, RED]
                red = red - 1
                continue
            }
        }
        const color = getRandomInt(10)
        if (color === 0) {
            if (red > 0) {
                colors = [...colors, RED]
                red = red - 1
                continue
            }
        }
        if (color === 1) {
            if (blue > 0) {
                colors = [...colors, BLUE]
                blue = blue - 1
                continue
            }
        }
        colors = [...colors, WHITE]
    }
    return colors
}

export const gameTwoReducer = createReducer(initialGameTwoState, (builder) => {
    builder
        .addCase(startGameTwoAction, (state, action) => {
            state.score = 0
            state.level = 1
            state.isGameRunning = true
            state.colors = generateColors(NUMBER_OF_COlORS)
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
            state.colors = generateColors(NUMBER_OF_COlORS)
        })
        .addCase(increaseScoreGameTwoAction, (state, action) => {
            state.score++
        })
})
