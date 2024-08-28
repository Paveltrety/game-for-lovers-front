import { AsyncThunkAction } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '@/store';
import { KnownActionTypes } from '@/store/core/actions';
import { IThunkApiConfigBase } from '@/store/core/createAppAsyncThunk';

import { ERequestStatus } from './ERequestStatus';

export interface ISimpleAction {
  type: KnownActionTypes | string;
  [anyDataProps: string]: unknown;
}

export type KnownStoreActionType<ResultType, ThunkArg = unknown> =
  | ISimpleAction
  | AsyncThunkAction<ResultType, ThunkArg, IThunkApiConfigBase>;

export interface StoreDispatch {
  (action: ISimpleAction, getState?: () => RootState): ISimpleAction;
  <R, ThunkArg, ThunkApiConfig extends DefaultAsyncThunkConfig>(
    asyncAction: AsyncThunkAction<R, ThunkArg, ThunkApiConfig>,
  ): ReturnType<AsyncThunkAction<R, ThunkArg, ThunkApiConfig>>;
  <R>(action: (dispatch: AppDispatch, getState: () => RootState) => R): R;
}

export type DefaultAsyncThunkConfig = {
  state?: unknown;
  dispatch?: StoreDispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

export interface IBaseState {
  status: ERequestStatus;
  error?: unknown;
}
