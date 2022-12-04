import { FormPlayers } from './components/FormPlayers';
import { GameArea } from './components/GameArea/GameArea';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<FormPlayers />} />
            <Route path="/game" element={<GameArea />} />
        </Routes>
    );
}
