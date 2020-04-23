import React, { Component } from 'react';
import styles from './Layout.module.css';
import Auxillary from '../Auxillary/Auxillary';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <Auxillary>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    isAuth = {this.props.isAuthenticate} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    isAuth = {this.props.isAuthenticate} />
                <main className={styles.content}>
                    <div>{this.props.children}</div>
                </main>
            </Auxillary>
        );
    }
};
//we would have connected state to navigation item which is presentation component but that is not the best way to do. 
//It is better to connect state only in containers.  Even though layout is not container but still wrapping component
const mapStateToProps = (state) => {
    return {
        isAuthenticate: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);

