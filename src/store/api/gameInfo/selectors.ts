import { RootState } from '@/store';
import { IPlayer } from './types';


const male = (state: RootState): IPlayer | null => state.gameInfo.male;
const female = (state: RootState): IPlayer | null => state.gameInfo.female;
const counterMove = (state: RootState): number => state.gameInfo.counterMove;
const isMoveMale = (state: RootState): boolean => state.gameInfo.isMoveMale;

export const gameInfoSelectors = {
  male,
  female,
  counterMove,
  isMoveMale
};
