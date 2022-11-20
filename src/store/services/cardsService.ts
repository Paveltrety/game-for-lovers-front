import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../../constants/server';
import { Card } from '../../types';

export const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        fetchCards: build.query<Card[], null>({
            query: () => ({
                url: '/cards',
            }),
        }),
    }),
});
