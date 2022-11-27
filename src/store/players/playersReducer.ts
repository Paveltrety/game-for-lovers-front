import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAME_CATEGORY_DEFAULT } from '../../constants/player';
import { GameCategory, Player, SetGameSettingsPayload, SetNamesPlayersPayload } from '../../types';

type PlayersState = {
    male: Player;
    female: Player;
    isMoveMale: boolean;
    counterMove: number;
    gameCategory: GameCategory;
};

const initialState: PlayersState = {
    male: {
        id: 1,
        name: null,
        points: 0,
    },
    female: {
        id: 2,
        name: null,
        points: 0,
    },
    isMoveMale: true,
    counterMove: 0,
    gameCategory: GAME_CATEGORY_DEFAULT,
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setNamesPlayers(state, action: PayloadAction<SetNamesPlayersPayload>) {
            state.male.name = action.payload.male;
            state.female.name = action.payload.female;
        },
        setGameSettings(state, action: PayloadAction<SetGameSettingsPayload>) {
            state.male.name = action.payload.male;
            state.female.name = action.payload.female;
            state.gameCategory = action.payload.gameCategory;
        },
        incrementCounterMove(state) {
            state.isMoveMale ? state.male.points++ : state.female.points++;
            state.isMoveMale = !state.isMoveMale;
            state.counterMove++;
        },
        skipMove(state) {
            state.isMoveMale = !state.isMoveMale;
            state.counterMove++;
        },
    },
});

export default playersSlice.reducer;
