import { createAppSlice } from '../../core/createAppSlice';
import { ERequestStatus } from '../../core/ERequestStatus';
import { EReducerName } from '../../core/reducers';

import { cardsActions } from './actions';
import { ICardsState } from './types';

const initialState: ICardsState = {
  status: ERequestStatus.Idle,
  cards: [],
};

const slice = createAppSlice({
  initialState,
  name: EReducerName.Cards,
  extraReducers: (builder) => {
    builder
      .addCase(cardsActions.fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.data;
      })
      .addCase(cardsActions.clearCards, () => {
        return initialState;
      });
  },
});

export default slice.reducer;
