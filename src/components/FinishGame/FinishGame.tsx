import * as playersSelectors from '../../store/players/playersSelectors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import styles from './FinishGame.module.scss';
import { useCallback } from 'react';
import { playersSlice } from '../../store/players/playersReducer';

export const FinishGame = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { restartGame } = playersSlice.actions;
    const male = useAppSelector(playersSelectors.malePlayer);
    const female = useAppSelector(playersSelectors.femalePlayer);
    const isDraw = male.points === female.points;
    const isMaleWon = male.points > female.points;

    const handleRestart = useCallback(() => {
        dispatch(restartGame());
        navigate('/');
    }, [navigate]);

    return (
        <div className={styles.root}>
            {isDraw ? (
                <span className={styles.result}>Ничья</span>
            ) : isMaleWon ? (
                <span> Победил {male.name}</span>
            ) : (
                <span> Победила {female.name}</span>
            )}
            <button onClick={handleRestart} className={styles.button}>
                Начать заново
            </button>
        </div>
    );
};
