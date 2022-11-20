import * as ls from 'local-storage';

export type NamesPlayersLS = {
    male: string;
    female: string;
};

//export const getUNamesPlayersLS = () => ls.get<NamesPlayersLS>('users');

export const getUNamesPlayersLS = () => {
    const namesPlayers = localStorage.getItem('users');
    console.log(namesPlayers ? JSON.parse(namesPlayers) : 'fwfw', 'namesPlayers');
    return namesPlayers
        ? JSON.parse(namesPlayers)
        : {
              male: '',
              female: '',
          };
};
