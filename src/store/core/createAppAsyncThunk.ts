import { AsyncThunk, AsyncThunkOptions, AsyncThunkPayloadCreator, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { KnownActionTypes } from '@/store/core/actions';
import { fulfilledAction, pendingAction, rejectedAction } from '@/store/core/commonActions';
import { EReducerName } from '@/store/core/reducers';
import type { StoreDispatch } from '@/store/core/types';
import { IError } from '@/types/errors';


export interface IThunkApiConfigBase {
  state: RootState;
  dispatch: StoreDispatch;
  extra: unknown;
  rejectValue?: unknown;
}

const innerCreateAppAsyncThunk = createAsyncThunk.withTypes();

interface ICreateAppAsyncThunkOptions {
  errorKey?: string;
}

export const createAppAsyncThunk = <TReturn, TThunkArgs = void>(
  reducerName: EReducerName,
  actionName: KnownActionTypes,
  payloadCreator: AsyncThunkPayloadCreator<TReturn, TThunkArgs, IThunkApiConfigBase>,
  options?: ICreateAppAsyncThunkOptions,
  rtkOptions?: AsyncThunkOptions<TThunkArgs, IThunkApiConfigBase>,
): AsyncThunk<TReturn, TThunkArgs, IThunkApiConfigBase> => {
  const { errorKey } = options || {};
  return innerCreateAppAsyncThunk<TReturn, TThunkArgs, IThunkApiConfigBase>(
    actionName,
    async (arg: TThunkArgs, thunkAPI) => {
      const { dispatch } = thunkAPI;

      dispatch(pendingAction(reducerName));

      try {
        const response = (await payloadCreator(arg, thunkAPI)) as TReturn;
        dispatch(fulfilledAction(reducerName));
        return response;
      } catch (e) {
        const error = e as IError;
  
        dispatch(rejectedAction(reducerName, error));

        if (errorKey) {
          console.log(errorKey)
        }
        throw error;
      }
    },
    {
      serializeError: (e) => e as SerializedError,
      ...rtkOptions,
    },
  );
};
