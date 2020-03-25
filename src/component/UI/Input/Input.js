import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            {...props.elementConfig}
             className={classes.InputElement} 
             value={props.value}/>
            break;
        case ('textArea'):
            inputElement = <textarea 
            {...props.elementConfig} 
            className={classes.InputElement} 
            value={props.value}/>
            break;
        default:
            inputElement = <input 
            {...props.elementConfig} 
            className={classes.InputElement}
            value={props.value} />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;