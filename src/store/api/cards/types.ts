import { IBaseState } from '../../core/types';

export interface ICard {
  id: number;
  text: string;
}

export interface ICardsResponse {
  data: ICard[];
  totalPages: number;
}

export interface ICardsState extends IBaseState {
  cards: ICard[];
}

export enum ECardsActionTypes {
  GetCards = 'cards/list/get',
  ClearCards = 'cards/list/clear',
}
