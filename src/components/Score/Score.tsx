import cn from 'classnames';
import { IPlayer } from '@/store/api/gameInfo/types';

import styles from './Score.module.scss';

interface IScoreProps {
  male: IPlayer;
  female: IPlayer;
  className?: string;
}

export const Score = ({ male, female, className }: IScoreProps) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.scoreWrapper}>
        <span>{male.name}: </span>
        <span>{male.points}</span>
      </div>
      <div className={styles.scoreWrapper}>
        <span>{female.name}: </span>
        <span>{female.points}</span>
      </div>
    </div>
  );
};
