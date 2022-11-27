export type Gender = 'female' | 'male';

export type Player = {
    id: number;
    name: string | null;
    points: number;
};

export type NamesPlayersLS = {
    male: string;
    female: string;
};

export type SetNamesPlayersPayload = {
    male: string;
    female: string;
};

export type SetGameSettingsPayload = {
    male: string;
    female: string;
    gameCategory: GameCategory;
};

export type Card = {
    id: number;
    text: string;
};

export type GameCategory = 'confides' | 'vulgars';
