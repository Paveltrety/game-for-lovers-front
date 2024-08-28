import { createSlice, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { CreateSliceOptions, Slice, SliceCaseReducers } from '@reduxjs/toolkit/dist/createSlice';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit/src/mapBuilders';
import { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';

import { fulfilledAction, pendingAction, rejectedAction, resetAction } from '@/store/core/commonActions';
import { ERequestStatus } from '@/store/core/ERequestStatus';
import { EReducerName } from '@/store/core/reducers';

import { IBaseState } from './types';
import { TWithOptional } from '@/types/TWithOptional';

export const createAppSlice = <State extends IBaseState, CaseReducers extends SliceCaseReducers<State>, Name extends EReducerName>(
  options: TWithOptional<CreateSliceOptions<State, CaseReducers, Name>, 'reducers'>,
): Slice<State, CaseReducers, Name> => {
  const { reducers = {} as CaseReducers, name, extraReducers, ...otherOptions } = options;
  return createSlice({
    ...(otherOptions as Omit<CreateSliceOptions<State, CaseReducers, Name>, 'reducers' | 'name'>),
    reducers: reducers as ValidateSliceCaseReducers<State, CaseReducers>,
    name,
    extraReducers: (builder) => {
      if (extraReducers) {
        const typedExtraReducers = extraReducers as (builder: ActionReducerMapBuilder<NoInfer<State>>) => void;
        typedExtraReducers(builder);
      }
      builder
        .addCase(pendingAction, (state, action) => {
          if (name === action.payload) {
            state.status = ERequestStatus.Pending;
            state.error = null;
          }
        })
        .addCase(fulfilledAction, (state, action) => {
          if (name === action.payload) {
            state.status = ERequestStatus.Fulfilled;
          }
        })
        .addCase(rejectedAction, (state, { payload: { reducerName, error } }) => {
          if (name === reducerName) {
            state.status = ERequestStatus.Rejected;
            state.error = error;
          }
        })
        .addCase(resetAction, (state, action) => {
          if (name === action.payload) {
            state.status = ERequestStatus.Idle;
            state.error = null;
          }
        });
    },
  });
};
