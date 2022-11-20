import * as playerSelectors from '../../store/players/playersSelectors';
import { Score } from '../Score';
import { useAppSelector } from '../../hooks/redux';
import { Game } from '../Game';
import { FinishGame } from '../FinishGame';
import styles from './GameArea.module.scss';
import { useFetchCards } from '../../hooks/useFetchCards';

export const GameArea = () => {
    const { currentCard, isLoading, isError } = useFetchCards();
    const male = useAppSelector(playerSelectors.malePlayer);
    const female = useAppSelector(playerSelectors.femalePlayer);

    return (
        <div className={styles.root}>
            {!isLoading && !isError ? (
                <>
                    <Score male={male} female={female} />
                    {currentCard ? <Game /> : <FinishGame />}
                </>
            ) : (
                <>
                    {isLoading && <div>Загрузка</div>}
                    {isError && <div>Ошибка емае</div>}
                </>
            )}
        </div>
    );
};
