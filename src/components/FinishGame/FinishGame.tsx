import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import styles from './FinishGame.module.scss';
import { gameInfoActions, gameInfoSelectors } from '@/store/api/gameInfo';
import { IPlayer } from '@/store/api/gameInfo/types';
import { Layout } from '../Layout';
import { Score } from '../Score';

export const FinishGame = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const male = useAppSelector(gameInfoSelectors.male) as IPlayer;
  const female = useAppSelector(gameInfoSelectors.female) as IPlayer;

  const isDraw = male.points === female.points;
  const isMaleWon = male.points > female.points;

  const handleRestart = () => {
    dispatch(gameInfoActions.clearGameInfo());

    navigate('/');
  };

  return (
    <Layout>
      <div className={styles.body}>
        <Score male={male} female={female} className={styles.score} />
        <div className={styles.content}>
          {isDraw ? (
            <span className={styles.result}>Ничья</span>
          ) : isMaleWon ? (
            <span className={styles.result}>
              Победил <span className={styles.bold}>{male?.name}</span>
            </span>
          ) : (
            <span className={styles.result}>
              <span className={styles.bold}> Победила {female?.name}</span>
            </span>
          )}
          <button onClick={handleRestart} className={styles.button}>
            Начать заново
          </button>
        </div>
      </div>
    </Layout>
  );
};
