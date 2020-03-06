import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

 const OrderSummary = (props) => {
     const ingredientSummary = Object.keys(props.ingredients)
     .map(igKey => {
     return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
     })
     return(
        <Aux>
            <h3>Your Orrder</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ? </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
     );
 }

 export default OrderSummary;