import { FC, useLayoutEffect, useMemo } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { playersSlice } from '../../store/players/playersReducer';
import { NamesPlayersLS, Player } from '../../types';
import { getUNamesPlayersLS } from '../../utils/user';
import styles from './Score.module.scss';

type ScoreProps = {
    male: Player;
    female: Player;
};

export const Score: FC<ScoreProps> = ({ male, female }) => {
    const dispatch = useAppDispatch();
    const { setNamesPlayers } = playersSlice.actions;
    const playersNamesLS = useMemo<NamesPlayersLS>(
        () => getUNamesPlayersLS(),
        []
    );

    useLayoutEffect(() => {
        if (!male.name && !female.name) {
            dispatch(
                setNamesPlayers({
                    male: playersNamesLS.male,
                    female: playersNamesLS.female,
                })
            );
        }
    }, []);
    return (
        <div className={styles.root}>
            <div className={styles.scoreWrapper}>
                <span>{male.name ?? playersNamesLS.male}: </span>
                <span>{male.points}</span>
            </div>
            <div className={styles.scoreWrapper}>
                <span>{female.name ?? playersNamesLS.female}: </span>
                <span>{female.points}</span>
            </div>
        </div>
    );
};
