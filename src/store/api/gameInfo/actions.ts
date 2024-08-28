import { createAction } from '@reduxjs/toolkit';

import { EPlayersActionTypes, ISetGameInfoParams } from './types';


const setGameInfo = createAction<ISetGameInfoParams>(EPlayersActionTypes.SetInfo);
const skipMove = createAction(EPlayersActionTypes.SkipMove);
const nextMove = createAction(EPlayersActionTypes.NextMove);
const clearGameInfo = createAction(EPlayersActionTypes.ClearGameInfo);

export const gameInfoActions = {
  setGameInfo,
  skipMove,
  nextMove,
  clearGameInfo
};
