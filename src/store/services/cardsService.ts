import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../../constants/server';
import { FetchCardsParams, FetchCardsResponse } from '../../types';

export const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        fetchCards: build.query<FetchCardsResponse, FetchCardsParams>({
            query: (param) => `/${param.gameCategory}?page=${param.page}`,
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => ({
                data: [...currentCache.data, ...newItems.data],
                totalPages: newItems.totalPages,
                currentPage: newItems.currentPage,
            }),
            forceRefetch: ({ currentArg, previousArg }) =>
                currentArg?.page !== previousArg?.page,
        }),
    }),
});
