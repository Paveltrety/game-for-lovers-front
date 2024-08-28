
import { IBaseState } from '../../core/types';


export enum EGameCategory {
  acquaintances = 'acquaintances',
  confides = 'confides',
  vulgars = 'vulgars'
}

export interface IPlayer {
  name: string,
  points: number,
}

export interface IGameInfoState extends IBaseState {
  male: IPlayer | null;
  female: IPlayer | null;
  counterMove: number;
  gameCategory: EGameCategory;
  isMoveMale: boolean;
}

export interface ISetGameInfoParams {
  male: string;
  female: string;
  gameCategory: EGameCategory;
}

export enum EPlayersActionTypes {
  SetInfo = 'gameInfo/info/set',
  SkipMove = 'gameInfo/move/skip',
  NextMove = 'gameInfo/move/next',
  ClearGameInfo = 'gameInfo/info/clear',
}
