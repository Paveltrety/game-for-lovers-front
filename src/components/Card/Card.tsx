import { useAppDispatch } from '../../hooks/redux';
import { ICard } from '@/store/api/cards/types';
import { gameInfoActions } from '@/store/api/gameInfo';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

interface ICardProps {
  isHasNextCard: boolean;
  currentCard?: ICard;
}

export const Card = ({ currentCard, isHasNextCard }: ICardProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const skipMove = () => dispatch(gameInfoActions.skipMove());
  const nextMove = () => dispatch(gameInfoActions.nextMove());

  const handleClickButtom = (move: () => void) => () => {
    if (isHasNextCard) {
      move();
    } else {
      console.log('navigate to result');
      navigate('/result');
    }
  };

  if (!currentCard) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.text}>{currentCard.text}</div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleClickButtom(skipMove)}>
          ✘
        </button>
        <button className={styles.button} onClick={handleClickButtom(nextMove)}>
          ✔
        </button>
      </div>
    </div>
  );
};
