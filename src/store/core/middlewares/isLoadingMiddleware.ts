
import { isAsyncThunkAction, Middleware } from '@reduxjs/toolkit';

import type { KnownActionTypes } from '@/store/core/actions';
import type { ISimpleAction } from '@/store/core/types';
import { pendingAction, rejectAction, resolveAction } from '@/store/meta/metaSlice';

import { ERequestStatus } from '../ERequestStatus';

export const getActionType = (type: string): string => {
  return type
    .replace(`/${ERequestStatus.Pending}`, '')
    .replace(`/${ERequestStatus.Rejected}`, '')
    .replace(`/${ERequestStatus.Fulfilled}`, '');
};


export const isLoadingMiddleware: Middleware<object, unknown> = (storeApi) => (next) => async (action) => {
  const { dispatch } = storeApi;
  const isRTKAction = isAsyncThunkAction(action);

  if (isRTKAction) {
    const { type, meta } = action;
    const { requestStatus } = meta;

    const actionType = getActionType(type) as unknown as KnownActionTypes;

    switch (requestStatus) {
      case ERequestStatus.Pending: {
        dispatch(pendingAction({ actionType }));
        break;
      }
      case ERequestStatus.Rejected: {
        const rejectResult = next(action as ISimpleAction);
        dispatch(rejectAction({ actionType }));
        return rejectResult;
      }
      case ERequestStatus.Fulfilled: {
        const fulfilledResult = next(action as ISimpleAction);
        dispatch(resolveAction({ actionType }));
        return fulfilledResult;
      }
    }
  }

  return next(action as ISimpleAction);
};
