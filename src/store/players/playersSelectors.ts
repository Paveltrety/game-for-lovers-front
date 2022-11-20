import { RootState } from '../store';

export const malePlayer = (state: RootState) => state.playersReducer.male;
export const femalePlayer = (state: RootState) => state.playersReducer.female;
export const isMoveMale = (state: RootState) => state.playersReducer.isMoveMale;
export const nameMale = (state: RootState) => state.playersReducer.male.name;
export const nameFemale = (state: RootState) =>
    state.playersReducer.female.name;
export const counterMove = (state: RootState) =>
    state.playersReducer.counterMove;
