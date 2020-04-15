import * as actionTypes from '../action/actionTypes';
const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                id: action.orderId,
                ...action.orderData
            }
            return {
                ...state,
                orders: state.orders.concat([newOrder]),
                loading: false,
                purchased: true
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_INIT:
            return{
                ...state,
                purchased: false
            }
        default:
            return {
                ...state
            }
    }
}
export default reducer;