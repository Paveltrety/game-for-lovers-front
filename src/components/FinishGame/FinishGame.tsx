import * as playersSelectors from '../../store/players/playersSelectors';
import { useAppSelector } from '../../hooks/redux';

export const FinishGame = () => {
    const male = useAppSelector(playersSelectors.malePlayer);
    const female = useAppSelector(playersSelectors.femalePlayer);
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
