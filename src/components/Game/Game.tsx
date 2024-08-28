import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Card } from '../Card';
import { TitleGame } from '../TitleGame';
import styles from './Game.module.scss';
import { gameInfoSelectors } from '@/store/api/gameInfo';
import { cardsActions, cardsSelectors } from '@/store/api/cards';
import { useEffect } from 'react';

export const Game = () => {
  const dispatch = useAppDispatch();

  const counterMove = useAppSelector(gameInfoSelectors.counterMove);
  const cards = useAppSelector(cardsSelectors.cards);

  const currentCard = cards[counterMove];
  const isHasNextCard = Boolean(cards.length && cards[counterMove + 1]);

  useEffect(() => {
    dispatch(cardsActions.fetchCards());

    return () => {
      dispatch(cardsActions.clearCards());
    };
  }, []);

  return (
    <div className={styles.root}>
      <TitleGame />
      <Card currentCard={currentCard} isHasNextCard={isHasNextCard} />
    </div>
  );
};
