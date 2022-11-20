import { LOCAL_STORAGE_NAMES_PLAYERS } from "../constants/player";

export const getUNamesPlayersLS = () => {
    const namesPlayers = localStorage.getItem(LOCAL_STORAGE_NAMES_PLAYERS);
    return namesPlayers
        ? JSON.parse(namesPlayers)
        : {
              male: '',
              female: '',
          };
};
