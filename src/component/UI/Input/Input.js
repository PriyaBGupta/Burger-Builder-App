import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;

    const inputClasses = [classes.InputElement];
    if(props.invalid && props.shouldValidate){
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            {...props.elementConfig}
             className={inputClasses.join(' ')} 
             value={props.value} onChange={props.changed}/>
            break;
        case ('textArea'):
            inputElement = <textarea 
            {...props.elementConfig} 
            className={inputClasses.join(' ')} 
            value={props.value} onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (
                <select
                className={inputClasses.join(' ')}
                value={props.value}
                 onChange={props.changed}>
                {props.elementConfig.options.map(option=>(
                    <option value={option.value} key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>

            );
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