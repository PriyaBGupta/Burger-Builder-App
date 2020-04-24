import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        
        {props.isAuthenticate ?
        <Auxillary>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link="/logout">Logout</NavigationItem>
        </Auxillary>
        :<NavigationItem link="/auth">Authentication</NavigationItem>}
    </ul>
);

export default NavigationItems;