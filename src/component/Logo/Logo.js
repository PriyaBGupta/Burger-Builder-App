import React from 'react';
import burgerLogo from '../../asset/images/burger-builder-logo.png';
import classes from './Logo.module.css'

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="logo"/>
    </div>
)

export default Logo;