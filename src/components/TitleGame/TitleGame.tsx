import { gameInfoSelectors } from '@/store/api/gameInfo';
import { useAppSelector } from '../../hooks/redux';
import styles from './TitleGame.module.scss';

export const TitleGame = () => {
    const isMoveMale = useAppSelector(gameInfoSelectors.isMoveMale);
    const nameMale = useAppSelector(gameInfoSelectors.male)?.name as string;
    const nameFemale = useAppSelector(gameInfoSelectors.female)?.name as string;

    return (
        <div className={styles.root}>
            Ход игрока: <b>{isMoveMale ? nameMale : nameFemale} </b>
        </div>
    );
};
