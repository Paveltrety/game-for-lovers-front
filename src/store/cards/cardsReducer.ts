import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../types';
import { fetchCards } from './cardsActions';

type CardsState = {
    cards: Card[];
    isLoading: boolean;
    error: string | null;
};

const initialState: CardsState = {
    cards: [],
    isLoading: false,
    error: null,
};

export const cardsSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCards.fulfilled.type]: (state, action: PayloadAction<Card[]>) => {
            state.isLoading = false;
            state.error = null;
            state.cards = action.payload;
        },
        [fetchCards.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default cardsSlice.reducer;
