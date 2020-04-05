import * as actionType from './action';
const initialState = {
    // ingredients should be null and we should get this object from  
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    totalPrice: 4,
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionType.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default:
            return state;
    }
}
export default reducer;