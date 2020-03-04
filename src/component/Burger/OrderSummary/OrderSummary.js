import React from 'react';
import Aux from '../../../hoc/Auxillary'
 const OrderSummary = (props) => {
     const ingredientSummary = Object.keys(props.ingredients)
     .map(igKey => {
     return <li>{igKey} : {props.ingredients[igKey]}</li>
     })
     return(
        <Aux>
            <h3>Your Orrder</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
     );
 }
 export default OrderSummary;