import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gender, Player, SetNamesPlayersPayload } from '../../types';

type PlayersState = {
    male: Player;
    female: Player;
    isMoveMale: boolean;
    counterMove: number;
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
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setNamesPlayers(state, action: PayloadAction<SetNamesPlayersPayload>) {
            state.male.name = action.payload.male;
            state.female.name = action.payload.female;
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
    //extraReducers: {
    //    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //        state.isLoading = false;
    //        state.error = ''
    //        state.users = action.payload;
    //    },
    //    [fetchUsers.pending.type]: (state) => {
    //        state.isLoading = true;
    //    },
    //    [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
    //        state.isLoading = false;
    //        state.error = action.payload
    //    },
    //}
});

export default playersSlice.reducer;
