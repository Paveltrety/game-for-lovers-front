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

export type Card = {
    id: number;
    text: string;
};
