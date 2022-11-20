import { FormPlayers } from './components/FormPlayers';
import { GameArea } from './components/GameArea/GameArea';
import { Route, Routes } from 'react-router-dom';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<FormPlayers />} />
            <Route path="/game" element={<GameArea />} />
        </Routes>
    );
}
