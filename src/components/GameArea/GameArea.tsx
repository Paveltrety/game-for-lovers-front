import { Score } from '../Score';
import { useAppSelector } from '../../hooks/redux';
import { Game } from '../Game';
import styles from './GameArea.module.scss';
import { gameInfoSelectors } from '@/store/api/gameInfo';
import { IPlayer } from '@/store/api/gameInfo/types';
import { Layout } from '../Layout';

export const GameArea = () => {
  const male = useAppSelector(gameInfoSelectors.male) as IPlayer;
  const female = useAppSelector(gameInfoSelectors.female) as IPlayer;

  return (
    <Layout>
      <div className={styles.body}>
        <Score male={male} female={female} />
        <Game />
      </div>
    </Layout>
  );
};
