import React from 'react';
import styles from './Layout.module.css';
import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => {
    console.log(styles);
    return(
    <Auxillary>
        <Toolbar/>
        <main className={styles.content}>
            <div>{props.children}</div>
        </main>
    </Auxillary>
    );
};
export default Layout;

