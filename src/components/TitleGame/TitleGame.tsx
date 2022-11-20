import { useAppSelector } from '../../hooks/redux';
import * as playerSelectors from '../../store/players/playersSelectors';
import styles from './TitleGame.module.scss';

export const TitleGame = () => {
    const isMoveMale = useAppSelector(playerSelectors.isMoveMale);
    const nameMale = useAppSelector(playerSelectors.nameMale);
    const nameFemale = useAppSelector(playerSelectors.nameFemale);

    return <div className={styles.root}>Ход игрока: {isMoveMale ? nameMale : nameFemale}</div>;
};
