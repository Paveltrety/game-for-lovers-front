import axios, { AxiosPromise } from 'axios';


import { ICardsResponse } from './types';
import { API_URL } from '@/constants/server';
import { EGameCategory } from '../gameInfo/types';


export const fetchCardsRequest = (category: EGameCategory): AxiosPromise<ICardsResponse> => {
  return axios.get(`${API_URL}cards/${category}`);
};

