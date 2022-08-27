import {createReducer} from "@reduxjs/toolkit";
import {
    startGameThreeAction,
    startTimerAction,
    toogleCircle,
    finishGame
} from "../actions/gameThreeActions";
import blurryUtils from "../utils/blurryUtils";

interface GameThreeState {
    isGameRunning: boolean
    isEndGame: boolean,
    score: number,
    circleProps: Array<string>
}

export const initialGameThreeState: GameThreeState = {
    isGameRunning: false,
    isEndGame: false,
    score: 0,
    circleProps: []
}

export const gameThreeReducer = createReducer(initialGameThreeState, (builder) => {
    builder
        .addCase(startGameThreeAction, (state, action) => {
            state.score = 0
            state.isGameRunning = true
            state.circleProps = blurryUtils.generateBlurCircles(blurryUtils.NUMBER_OF_CIRCLES)
        })
        .addCase(toogleCircle, (state, action) => {
            if (state.circleProps[parseInt(action.payload.idx)] === blurryUtils.BLUR) {
                state.circleProps[parseInt(action.payload.idx)] = blurryUtils.NON_BLUR
            } else {
                state.circleProps[parseInt(action.payload.idx)] = blurryUtils.BLUR
            }
        })
        .addCase(startTimerAction.fulfilled, (state, action) => {
            state.isGameRunning = false
        })
        .addCase(finishGame, (state, action) => {
            state.score = blurryUtils.NUMBER_OF_CIRCLES - state.circleProps.filter( el => el === blurryUtils.BLUR).length
            state.isGameRunning = false
        })
})
