import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card } from '../../types';

export const fetchCards = createAsyncThunk('cards/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios.get<Card[]>('http://localhost:3001/cards');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка емае')
    }
});
