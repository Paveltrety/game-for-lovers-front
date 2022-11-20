import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { playersSlice } from '../../store/players/playersReducer';
import styles from './Card.module.scss';
import { useFetchCards } from '../../hooks/useFetchCards';

export const Card: FC = () => {
    const dispatch = useAppDispatch();
    const { currentCard } = useFetchCards();
    const { incrementCounterMove, skipMove } = playersSlice.actions;
    return (
        <div className={styles.root}>
            <div className={styles.text}>{currentCard?.text}</div>
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
