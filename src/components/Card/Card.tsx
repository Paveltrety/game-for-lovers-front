import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as cardaSelectors from '../../store/cards/cardSelectors';
import { playersSlice } from '../../store/players/playersReducer';
import cn from 'classnames';
import styles from './Card.module.scss';

export const Card: FC = () => {
    const dispatch = useAppDispatch();
    const { incrementCounterMove, skipMove } = playersSlice.actions;
    const currentCard = useAppSelector(cardaSelectors.currentCard);
    return (
        <div className={styles.root}>
            <div className={styles.text}>{currentCard.text}</div>
            <div className={styles.buttonWrapper}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(skipMove())}
                >
                    ✘
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementCounterMove())}
                >
                    ✔
                </button>
            </div>
        </div>
    );
};
