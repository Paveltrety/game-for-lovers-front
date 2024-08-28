import { useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { GAME_CATEGORY_DEFAULT, GAME_CATEGORY_OPTIONS } from '../../constants/form';
import { Select } from '../../ui/Select';
import { Option } from '../../ui/Select/Select.types';
import styles from './FormPlayers.module.scss';
import { gameInfoActions } from '@/store/api/gameInfo';
import { EGameCategory } from '@/store/api/gameInfo/types';
import { Layout } from '../Layout';

export const FormPlayers = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [gameCategory, setGameCategory] = useState<Option<EGameCategory>>(GAME_CATEGORY_DEFAULT);

  const isDisabledButon = !Boolean(maleName.length && femaleName.length);

  const startGame = () => {
    const gameSettingsData = {
      male: maleName,
      female: femaleName,
      gameCategory: gameCategory.value,
    };

    dispatch(gameInfoActions.setGameInfo(gameSettingsData));

    navigate('/game');
  };

  const onChangeGameCategory = useCallback(
    (option: Option<EGameCategory> | null) => setGameCategory(option ?? GAME_CATEGORY_DEFAULT),
    [setGameCategory],
  );

  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.title}>Игра поможет тебе сблизиться с партнером</div>
        <div className={styles.inputWrapper}>
          <input className={styles.input} value={maleName} placeholder="Имя парня" onChange={(e) => setMaleName(e.target.value)} />
          <input className={styles.input} value={femaleName} placeholder="Имя девушки" onChange={(e) => setFemaleName(e.target.value)} />
          <Select options={GAME_CATEGORY_OPTIONS} value={gameCategory} onChange={onChangeGameCategory} />
        </div>
        <button className={styles.button} disabled={isDisabledButon} onClick={startGame}>
          Начать
        </button>
      </div>
    </Layout>
  );
};
