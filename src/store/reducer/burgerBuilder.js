import * as actionType from '../action/actionTypes';
import updateObject from '../utility';

const initialState = {
    // ingredients should be null and we should get this object from  
    ingredients: null,
    totalPrice: 4,
    error: false
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients, updateIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState);
        case actionType.REMOVE_INGREDIENT:
            const removeIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updateIngs = updateObject(state.ingredients, removeIngredient);
            const updateSt = {
                ingredients: updateIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]    
            }
            return updateObject(state, updateSt)
        case actionType.SET_INGREDIENT:
            return updateObject(state, {ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat
            },
            totalPrice: 4,
            error: false})
        case actionType.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true})
        default:
            return state;
    }
}
export default reducer;