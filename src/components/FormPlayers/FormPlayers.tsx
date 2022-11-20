import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { playersSlice } from '../../store/players/playersReducer';
import styles from './FormPlayers.module.scss';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_NAMES_PLAYERS } from '../../constants/player';

export const FormPlayers = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { setNamesPlayers } = playersSlice.actions;

    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const isDisabledButon = !Boolean(maleName.length && femaleName.length);
    const startGame = () => {
        const usersData = {
            male: maleName,
            female: femaleName,
        };
        dispatch(setNamesPlayers(usersData));
        localStorage.setItem(LOCAL_STORAGE_NAMES_PLAYERS, JSON.stringify(usersData));
        navigate('/game');
    };

    return (
        <div className={styles.root}>
            <div className={styles.body}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        value={maleName}
                        placeholder="Имя парня"
                        onChange={(e) => setMaleName(e.target.value)}
                    />
                    <input
                        className={styles.input}
                        value={femaleName}
                        placeholder="Имя девушки"
                        onChange={(e) => setFemaleName(e.target.value)}
                    />
                </div>
                <button
                    className={styles.button}
                    disabled={isDisabledButon}
                    onClick={startGame}
                >
                    Начать
                </button>
            </div>
        </div>
    );
};
