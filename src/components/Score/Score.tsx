import { FC, useMemo } from 'react';
import { Player } from '../../types';
import { getUNamesPlayersLS, NamesPlayersLS } from '../../utils/user';

type ScoreProps = {
    male: Player;
    female: Player;
};

export const Score: FC<ScoreProps> = ({ male, female }) => {
    const playersNamesLS = useMemo<NamesPlayersLS>(() => getUNamesPlayersLS(), []);
    console.log(playersNamesLS, 'playersNames в компоненте')
    return (
        <div>
            <div>
                <span>{male.name ?? playersNamesLS.male}: </span>
                <span>{male.points}</span>
            </div>
            <div>
                <span>{female.name ?? playersNamesLS.female}: </span>
                <span>{female.points}</span>
            </div>
        </div>
    );
};
