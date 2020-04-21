import * as actionTypes from '../action/actionTypes';
import updateObject from '../utility';

const intialState = {
    token: null,
    error: null,
    loading: false,
    userId: null
}
const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        loading: false,       
        error: null
    })
}
const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}
const reducer = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)
        default:
            return state        
    }
}

export default reducer;