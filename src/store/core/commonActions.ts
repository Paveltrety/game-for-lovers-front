import { createAction } from '@reduxjs/toolkit';

import { EReducerName } from '@/store/core/reducers';

export const pendingAction = createAction('common-pending-action', (reducerName: EReducerName) => ({
  payload: reducerName,
}));

export const fulfilledAction = createAction('common-fulfilled-action', (reducerName: EReducerName) => ({
  payload: reducerName,
}));

export const rejectedAction = createAction('common-rejected-action', (reducerName: EReducerName, error: unknown | null) => ({
  payload: { reducerName, error },
}));

export const resetAction = createAction('common-reset-action', (reducerName: EReducerName) => ({
  payload: reducerName,
}));
