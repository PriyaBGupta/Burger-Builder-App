import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as action from '../../store/action/index'; 

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }
    purschaseHandler = () => {
        if(this.props.isAuthenticate){
            this.setState({ purchasing: true });
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth');
        }
    }
    purchaseCancelHandle = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandle = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout')
        // const queryParams = [];
        // for (let i in this.state.ingredients){
        //     //iterable over object({a:1, b:2}) where i is the key and object[i] is the value
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }
        // queryParams.push('price=' + this.state.totalPrice);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search: '?'+ queryString
        // });
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // }
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0 ;
    }
    componentDidMount() {
        console.log('init component did mount')
        this.props.onInitIngredients();
    }
    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.props.error?<p>Ingredients cant be loaded</p>:<Spinner />
        if (this.props.ings) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purschasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}
                        ordered={this.purschaseHandler} 
                        isAuth = {this.props.isAuthenticate}/>
                </Auxillary>
            );
            orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCancelled={this.purchaseCancelHandle}
            purchaseContinued={this.purchaseContinueHandle}
            isAuth = {this.props.isAuthenticate}
            price={this.props.price}></OrderSummary>;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Auxillary>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandle}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxillary>
        )
    }
}
const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticate: state.auth.token != null
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch(action.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(action.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(action.initIngredient()),
        onInitPurchase: () => dispatch(action.purchaseInit()),
        onSetAuthRedirectPath : (path) => dispatch(action.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));