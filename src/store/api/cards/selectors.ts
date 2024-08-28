import { RootState } from '@/store';

import { ICard } from './types';

const cards = (state: RootState): ICard[] => state.cards.cards


export const cardsSelectors = {
  cards,
};
