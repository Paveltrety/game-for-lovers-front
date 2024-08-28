import { createAppSlice } from '../../core/createAppSlice';
import { ERequestStatus } from '../../core/ERequestStatus';
import { EReducerName } from '../../core/reducers';

import { gameInfoActions } from './actions';
import { EGameCategory, IGameInfoState } from './types';

const initialState: IGameInfoState = {
  status: ERequestStatus.Idle,
  male: null,
  female: null,
  isMoveMale: true,
  counterMove: 0,
  gameCategory: EGameCategory.acquaintances,
};

const slice = createAppSlice({
  initialState,
  name: EReducerName.GameInfo,
  extraReducers: (builder) => {
    builder
      .addCase(gameInfoActions.setGameInfo, (state, action) => {
        state.male = { name: action.payload.male, points: 0 };
        state.female = { name: action.payload.female, points: 0 };
        state.gameCategory = action.payload.gameCategory;
      })
      .addCase(gameInfoActions.skipMove, (state) => {
        state.isMoveMale = !state.isMoveMale;
        state.counterMove = state.counterMove + 1;
      })
      .addCase(gameInfoActions.nextMove, (state) => {
        const isMoveMale = state.isMoveMale;
        state.isMoveMale = !isMoveMale;
        state.counterMove = state.counterMove + 1;
        if (isMoveMale) {
          state.male = {
            name: state.male?.name as string,
            points: (state.male?.points as number) + 1,
          };
        } else {
          state.female = {
            name: state.female?.name as string,
            points: (state.female?.points as number) + 1,
          };
        }
      })
      .addCase(gameInfoActions.clearGameInfo, () => {
        return initialState;
      });
  },
});

export default slice.reducer;
