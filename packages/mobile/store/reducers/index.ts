import { gameTwoReducers } from './gameTwoReducers';
import { gameOneReducers } from './gameOneReducers';

export const rootReducer = {
    reducer: {
        gameOneReducers,
        gameTwoReducers
    },
};
