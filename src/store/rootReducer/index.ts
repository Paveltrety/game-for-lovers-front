import { combineReducers } from '@reduxjs/toolkit';

import gameInfo from '@/store/api/gameInfo';
import cards from '@/store/api/cards';

const rootReducer = combineReducers({
  gameInfo,
  cards,
});

export default rootReducer;
