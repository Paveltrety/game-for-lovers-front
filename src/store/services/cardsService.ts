import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../../constants/server';
import { Card, GameCategory } from '../../types';

export const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (build) => ({
        fetchCards: build.query<Card[], GameCategory>({
            query: (gameCategory) => ({
                url: `/${gameCategory}`,
            }),
        }),
    }),
});
