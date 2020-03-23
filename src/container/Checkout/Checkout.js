import React, { Component } from 'react';
import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
    
    constructor(props) {
        super(props);
        
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        //iterable over array
        for (let param of query.entries()) {
            if(param[0] === 'price'){
                price = param[1]
            }else{
                //+ unary operator makes string into number
                ingredients[param[0]] = +param[1];
            }
        }
        
        this.state ={
            ingredients: ingredients,
            totalPrice: price
        }
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                path={this.props.match.path + '/contact-data'} render={(props)=>(<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)} />
            </div>

        )
    }

}
export default Checkout;