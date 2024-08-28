import { PayloadAction } from '@reduxjs/toolkit';

import { KnownActionTypes } from '@/store/core/actions';
import { createAppSlice } from '@/store/core/createAppSlice';
import { IsLoadingCounter } from '@/store/core/isLoadingCounter';

import { ERequestStatus } from '../core/ERequestStatus';
import { EReducerName } from '../core/reducers';
import { IBaseState } from '../core/types';

export interface IMetaItem {
  isLoading: boolean;
  status: ERequestStatus;
  error?: unknown;
  isLoadingCounter: boolean;
}

export type MetaState = {
  [key in KnownActionTypes]?: IMetaItem;
};

const initialState: MetaState & IBaseState = {
  error: null,
  status: ERequestStatus.Idle,
};

export interface IMetaPayload {
  actionType: KnownActionTypes;
  error?: unknown;
}

const IS_LOADING_COUNTERS_MAP = {} as {
  [key in KnownActionTypes]: IsLoadingCounter;
};

const metaSlice = createAppSlice({
  name: EReducerName.Meta,
  initialState,
  reducers: {
    pendingAction: (state, action: PayloadAction<IMetaPayload>) => {
      const {
        payload: { actionType },
      } = action;
      IS_LOADING_COUNTERS_MAP[actionType] = IS_LOADING_COUNTERS_MAP[actionType] || new IsLoadingCounter(actionType);
      state[actionType] = state[actionType] || ({} as IMetaItem);

      state[actionType]!.isLoading = IS_LOADING_COUNTERS_MAP[actionType].startLoading();
    },
    resolveAction: (state, action: PayloadAction<IMetaPayload>) => {
      const {
        payload: { actionType },
      } = action;

      state[actionType]!.isLoading = IS_LOADING_COUNTERS_MAP[actionType].endLoading();
    },
    rejectAction: (state, action: PayloadAction<IMetaPayload>) => {
      const {
        payload: { actionType },
      } = action;

      state[actionType]!.isLoading = IS_LOADING_COUNTERS_MAP[actionType].endLoading();
    },
  },
});

export default metaSlice.reducer;
export const { pendingAction, resolveAction, rejectAction } = metaSlice.actions;
