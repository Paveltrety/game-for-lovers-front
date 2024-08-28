import { PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    )
};
