import { Card } from '../Card';
import { TitleGame } from '../TitleGame';
import styles from './Game.module.scss';

export const Game = () => {
    return (
        <div className={styles.root}>
            <TitleGame />
            <Card />
        </div>
    );
};
