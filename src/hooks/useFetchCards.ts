import { cardsAPI } from '../store/services/cardsService';
import { useAppSelector } from './redux';
import * as playerSelectors from '../store/players/playersSelectors';
import { useEffect, useMemo, useState } from 'react';

const LIMIT = 10;

export const useFetchCards = () => {
    const [page, setPage] = useState(1);
    const gameCategory = useAppSelector(playerSelectors.gameCategory);
    const { data, isLoading, isError } =
        cardsAPI.useFetchCardsQuery({
            gameCategory,
            page,
        });

    const counterMove = useAppSelector(playerSelectors.counterMove);
    const isLoadMoreData = useMemo(() => {
        if (!data || data.currentPage === data.totalPages) {
            return false;
        }
        return data.currentPage * LIMIT - 3 === counterMove;
    }, [data, counterMove]);

    useEffect(() => {
        if (isLoadMoreData) {
            setPage((prev) => prev + 1);
        }
    }, [isLoadMoreData, setPage]);

    return {
        data,
        isLoading,
        isError,
        currentCard: data && data.data[counterMove],
    };
};
