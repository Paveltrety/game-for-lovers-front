import { FormPlayers } from './components/FormPlayers';
import { GameArea } from './components/GameArea/GameArea';
import { Route, Routes } from 'react-router-dom';
import { FinishGame } from './components/FinishGame';
import CheckInfo from './hoc/CheckInfo';

import './assets/styles/global.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPlayers />} />
      <Route
        path="/game"
        element={
          <CheckInfo>
            <GameArea />
          </CheckInfo>
        }
      />
      <Route
        path="/result"
        element={
          <CheckInfo>
            <FinishGame />
          </CheckInfo>
        }
      />
    </Routes>
  );
}
