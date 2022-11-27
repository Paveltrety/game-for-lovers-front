import { cardsAPI } from '../store/services/cardsService';
import { useAppSelector } from './redux';
import * as playerSelectors from '../store/players/playersSelectors';

export const useFetchCards = () => {
    const gameCategory = useAppSelector(playerSelectors.gameCategory);
    const { data, isLoading, isError } =
        cardsAPI.useFetchCardsQuery(gameCategory);
    const counterMove = useAppSelector(playerSelectors.counterMove);
    return {
        data,
        isLoading,
        isError,
        currentCard: data && data[counterMove],
    };
};
