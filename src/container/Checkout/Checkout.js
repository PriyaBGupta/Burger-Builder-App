import React, { Component } from 'react';
import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Checkout extends Component {
    
    // constructor(props) {
    //     super(props);
        
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     //iterable over array
    //     for (let param of query.entries()) {
    //         if(param[0] === 'price'){
    //             price = param[1]
    //         }else{
    //             //+ unary operator makes string into number
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
        
    //     this.state ={
    //         ingredients: ingredients,
    //         totalPrice: price
    //     }
    // }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        let summary = <Redirect to="/"/>
        if(this.props.ings){
            summary = (<div>
            <CheckoutSummary
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
            <Route 
                path={this.props.match.path + '/contact-data'} component = {ContactData}/>
        </div>)
        }
        
        return summary
    }

}
const mapStateToProps = state => {
    return{
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);