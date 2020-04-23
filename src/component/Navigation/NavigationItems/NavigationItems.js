import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {props.isAuthenticate ?
        <NavigationItem link="/logout">Logout</NavigationItem>
        :<NavigationItem link="/auth">Authentication</NavigationItem>}
    </ul>
);

export default NavigationItems;