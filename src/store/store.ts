import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playersReducer from './players/playersReducer';
import cardsReducer from './cards/cardsReducer';

const rootReducer = combineReducers({
    playersReducer,
    cardsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
