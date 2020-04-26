import * as actionTypes from '../action/actionTypes';
import {updateObject} from '../../shared/utility';

const intialState = {
    token: null,
    error: null,
    loading: false,
    userId: null,
    authenticateRedirect: '/'
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
const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {
        authenticateRedirect: action.path
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
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action)
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action)
        default:
            return state        
    }
}

export default reducer;