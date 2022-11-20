import { cardsAPI } from '../store/services/cardsService';
import { useAppSelector } from './redux';
import * as playerSelectors from '../store/players/playersSelectors';

export const useFetchCards = () => {
    const { data, isLoading, isError } = cardsAPI.useFetchCardsQuery(null);
    const counterMove = useAppSelector(playerSelectors.counterMove);
    return {
        data,
        isLoading,
        isError,
        currentCard: data && data[counterMove],
    };
};
