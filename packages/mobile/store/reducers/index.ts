import { gameTwoReducer } from './gameTwoReducers';
import { gameOneReducers } from './gameOneReducers';

export const rootReducer = {
    reducer: {
        gameOneReducers,
        gameTwoReducer
    },
};