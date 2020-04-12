import * as actionTypes from '../action/actionTypes';
const initialState = {
    orders:[],
    loading: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
    case actionTypes.PURCHASE_BURGER_SUCCESS:
        const newOrder = {
            id: action.orderId,
            ...action.orderData
        }
        return{
            ...state,
            orders: state.orders.concat([newOrder]),
            loading: false
        }
    case actionTypes.PURCHASE_BURGER_FAIL:
        return{
            ...state,
            loading: false
        }
    case actionTypes.PURCHASE_BURGER_START:
        return{
            ...state,
            loading: true
        }
    default:
        return{
            ...state
        }
    }
}
export default reducer;