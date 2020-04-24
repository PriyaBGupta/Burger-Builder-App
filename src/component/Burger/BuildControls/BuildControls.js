import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from "./BuildControls.module.css";
const BuildControls = (props)=>{
    const controls = [
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'}
    ];
    
    return (
        <div className ={classes.BuildControls}>
            <p>Current price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl =>(<BuildControl
                label = {ctrl.label}
                key = {ctrl.label}
                added = {()=>props.ingredientAdded(ctrl.type)}
                removed = {()=>props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />))}
            <button 
            className={classes.OrderButton}
            disabled={!props.purschasable}
            onClick={props.ordered}>
                {props.isAuth ? 'ORDER NOW' : 'SIGN UP For ORDER'} 
            </button>
        </div>
    );
}                       
export default BuildControls;
