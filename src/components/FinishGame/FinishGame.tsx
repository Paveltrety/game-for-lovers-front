import * as playerSelectors from '../../store/players/playerSelectors';
import { useAppSelector } from '../../hooks/redux';

export const FinishGame = () => {
    const male = useAppSelector(playerSelectors.malePlayer);
    const female = useAppSelector(playerSelectors.femalePlayer);
    const isDraw = male.points === female.points;
    const isMaleWon = male.points > female.points;
    return (
        <div>
            {isDraw ? (
                'Ничья'
            ) : isMaleWon ? (
                <span> Победил {male.name}</span>
            ) : (
                <span> Победила {female.name}</span>
            )}
        </div>
    );
};
