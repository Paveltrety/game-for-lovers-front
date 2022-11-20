import { RootState } from '../store';

export const currentCard = (state: RootState) => {
    const counterMove = state.playersReducer.counterMove;
    return state.cardsReducer.cards[counterMove] ?? null;
};

export const infoFetchingCards = (state: RootState) => {
    return {
        error: state.cardsReducer.error,
        isLoading: state.cardsReducer.isLoading,
    };
};
