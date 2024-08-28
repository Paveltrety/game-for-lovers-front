import { createAction } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../core/createAppAsyncThunk';
import { EReducerName } from '../../core/reducers';

import { fetchCardsRequest } from './requestHandlers';
import { ECardsActionTypes } from './types';

const clearCards = createAction(ECardsActionTypes.ClearCards);

const fetchCards = createAppAsyncThunk(
  EReducerName.Cards,
  ECardsActionTypes.GetCards,
  async (_, { getState }) => {
    const gameCategory = getState().gameInfo.gameCategory;
    const { data } = await fetchCardsRequest(gameCategory);

    return data;
  },
  { errorKey: 'notifications.is_error' },
);

export const cardsActions = {
  fetchCards,
  clearCards,
};
