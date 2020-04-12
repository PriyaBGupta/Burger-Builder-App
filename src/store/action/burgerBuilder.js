import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredient = () => {
    return (dispatch) => {
        //if we remove .json then url breaks down but since error handling is in parent component and in component did mount thats why it is not being called
        axios.get('/ingredients.json').then(response => {
            console.log(response.data,'init data');
            dispatch(setIngredients(response.data));
        })
        .catch(error => {
            fetchIngredientsFailed()
        });
    }
}
