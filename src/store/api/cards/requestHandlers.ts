import axios, { AxiosPromise } from 'axios';


import { ICardsResponse } from './types';
import { EGameCategory } from '../gameInfo/types';


export const fetchCardsRequest = (category: EGameCategory): AxiosPromise<ICardsResponse> => {
  return axios.get(`/cards/${category}`);
};

