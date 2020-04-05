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
import * as actionType from '../../store/action';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component {
    state = {
        totalPrice: 4,
        purschasable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    purschaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseCancelHandle = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandle = () => {
        const queryParams = [];
        for (let i in this.state.ingredients){
            //iterable over object({a:1, b:2}) where i is the key and object[i] is the value
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+ queryString
        });
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
        this.setState({ purschasable: sum > 0 });
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = priceAddition + this.state.totalPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }
    componentDidMount() { 
        //if we remove .json then url breaks down but since error handling is in parent component and in component did mount thats why it is not being called
        // axios.get('/ingredients.json').then(response => {
        //     this.setState({ ingredients: response.data });
        // })
        // .catch(error=>{
        //     this.setState({error:true})
        // });
    }
    render() {
        const disabledInfo = { ...this.props.ings };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let burger = this.state.error?<p>Ingredients cant be loaded</p>:<Spinner />
        if (this.props.ings) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purschasable={this.state.purschasable}
                        price={this.state.totalPrice}
                        ordered={this.purschaseHandler} />
                </Auxillary>
            );
            orderSummary = <OrderSummary
            ingredients={this.props.ings}
            purchaseCancelled={this.purchaseCancelHandle}
            purchaseContinued={this.purchaseContinueHandle}
            price={this.state.totalPrice}></OrderSummary>;
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
        ings: state.ingredients
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch({type: actionType.ADD_INGREDIENT,ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));