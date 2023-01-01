import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { playersSlice } from '../../store/players/playersReducer';
import { useNavigate } from 'react-router-dom';
import {
    GAME_CATEGORY_DEFAULT,
    GAME_CATEGORY_OPTIONS,
    LOCAL_STORAGE_NAMES_PLAYERS,
} from '../../constants/player';
import { Select } from '../../ui/Select';
import { Option } from '../../ui/Select/Select.types';
import styles from './FormPlayers.module.scss';
import { playersAPI } from '../../store/services/playersService';

export const FormPlayers = () => {
    const navigate = useNavigate();
    const [addUser, { isLoading }] = playersAPI.useAddNewUserMutation();
    const dispatch = useAppDispatch();
    const { setGameSettings } = playersSlice.actions;

    const [maleName, setMaleName] = useState('');
    const [femaleName, setFemaleName] = useState('');
    const [gameCategory, setGameCategory] = useState<Option>(
        GAME_CATEGORY_DEFAULT
    );

    const isDisabledButon = !Boolean(maleName.length && femaleName.length) || isLoading;

    const startGame = async () => {
        const gameSettingsData = {
            male: maleName,
            female: femaleName,
            gameCategory: gameCategory.value,
        };
        dispatch(setGameSettings(gameSettingsData));
        localStorage.setItem(
            LOCAL_STORAGE_NAMES_PLAYERS,
            JSON.stringify({ male: maleName, female: femaleName })
        );
        await addUser({ male: maleName, female: femaleName });
        navigate('/game');
    };

    const onChangeGameCategory = useCallback(
        (option: Option | null) =>
            setGameCategory(option ?? GAME_CATEGORY_DEFAULT),
        [setGameCategory]
    );

    return (
        <div className={styles.root}>
            <div className={styles.body}>
                <span className={styles.title}>
                    Игра поможет тебе сблизиться с партнером
                </span>
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
                    <Select
                        options={GAME_CATEGORY_OPTIONS}
                        value={gameCategory}
                        onChange={onChangeGameCategory}
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
