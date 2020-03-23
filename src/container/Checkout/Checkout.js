import React, { Component } from 'react';
import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
    state = {
        ingredients: {}
    }
    componentDidMount() {
        console.log(this.props.location);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            //iterable over array
            console.log(param, 'param');
            //+ unary operator makes string into number
            ingredients[param[0]] = +param[1];
        }
        console.log(ingredients);
        this.setState({ ingredients: ingredients });
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>

        )
    }

}
export default Checkout;