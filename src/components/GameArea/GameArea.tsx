import * as playerSelectors from '../../store/players/playerSelectors';
import * as cardaSelectors from '../../store/cards/cardSelectors';
import { Score } from '../Score';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Game } from '../Game';
import { FinishGame } from '../FinishGame';
import styles from './GameArea.module.scss';
import { useEffect } from 'react';
import { fetchCards } from '../../store/cards/cardsActions';

export const GameArea = () => {
    const dispatch = useAppDispatch()
    //const maleLS = JSON.parse(localStorage.getItem('users'))?.
    const male = useAppSelector(playerSelectors.malePlayer)
    const female = useAppSelector(playerSelectors.femalePlayer);
    const currentCard = useAppSelector(cardaSelectors.currentCard);
    const { isLoading, error } = useAppSelector(
        cardaSelectors.infoFetchingCards
    );
    useEffect(() => {
        dispatch(fetchCards())
    }, [])
    
    return (
        <div className={styles.root}>
            {!isLoading && !error ? (
                <>
                    <Score male={male} female={female} />
                    {currentCard ? <Game /> : <FinishGame />}
                </>
            ) : (
                <>
                    {isLoading && <div>Загрузка</div>}
                    {error && <div>{error}</div>}
                </>
            )}
        </div>
    );
};
