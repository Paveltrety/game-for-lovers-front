import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { playersSlice } from '../../store/players/playersReducer';
import styles from './FormPlayers.module.scss';
import { useNavigate } from 'react-router-dom';
import {
    GAME_CATEGORY_DEFAULT,
    GAME_CATEGORY_OPTIONS,
    LOCAL_STORAGE_NAMES_PLAYERS,
} from '../../constants/player';
import { GameCategory } from '../../types';

export const FormPlayers = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { setGameSettings } = playersSlice.actions;

    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const [gameCategory, setGameCategory] = useState<GameCategory>(GAME_CATEGORY_DEFAULT);

    const isDisabledButon = !Boolean(maleName.length && femaleName.length);
    const startGame = () => {
        const gameSettingsData = {
            male: maleName,
            female: femaleName,
            gameCategory,
        };
        dispatch(setGameSettings(gameSettingsData));
        localStorage.setItem(
            LOCAL_STORAGE_NAMES_PLAYERS,
            JSON.stringify({ male: maleName, female: femaleName })
        );
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
                    <select
                        value={gameCategory}
                        onChange={(event) =>
                            setGameCategory(event.target.value as GameCategory)
                        }
                    >
                        {GAME_CATEGORY_OPTIONS.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
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
