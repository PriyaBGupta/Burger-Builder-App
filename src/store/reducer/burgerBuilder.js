import * as actionType from '../action/actionTypes';
import updateObject from '../utility';

const initialState = {
    // ingredients should be null and we should get this object from  
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
const addIngredient = (state, action ) => {
    const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients, updateIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
            return updateObject(state, updatedState);
}
const removeIngredient = (state,action) => {
    const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updateIngs = updateObject(state.ingredients, updateIngredient);
            const updateSt = {
                ingredients: updateIngs,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true    
            }
            return updateObject(state, updateSt)
}
const setIngredient = (state,action) => {
    return updateObject(state, {ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false})
}
const fetchIngredient = (state, action) => {
    return updateObject(state, {error: true})
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionType.SET_INGREDIENT: return setIngredient(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredient(state, action);
        default:
            return state;
    }
}
export default reducer;