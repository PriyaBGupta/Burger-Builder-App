import React, { Component } from 'react';
import styles from './Layout.module.css';
import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    toggleMenuHandler = () => {
        this.setState({showSideDrawer: true});
    }
    render(){
        return(
        <Auxillary>
            <Toolbar toggledMenu={this.toggleMenuHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}/>
            <main className={styles.content}>
                <div>{this.props.children}</div>
            </main>
        </Auxillary>
        );
    }
};
export default Layout;

