import React from 'react';
import styles from './Layout.module.css';
import Auxillary from '../../hoc/Auxillary';
const Layout = props => {
    console.log(styles);
    return(
    <Auxillary>
        <div> ToolBar Sidedrawer Backdrop </div>
        <main className={styles.content}>
            <div>{props.children}</div>
        </main>
    </Auxillary>
    );
};
export default Layout;

