import { cardsAPI } from './services/cardsService';
import { playersAPI } from './services/playersService';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playersReducer from './players/playersReducer';

const rootReducer = combineReducers({
    playersReducer,
    [cardsAPI.reducerPath]: cardsAPI.reducer,
    [playersAPI.reducerPath]: playersAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(cardsAPI.middleware, playersAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
