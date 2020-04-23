import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSucess = (token, userId) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error        
    }
}

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authLogout = () => {
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkExpiration= (expirationTime) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(authLogout());
        },expirationTime*1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVsC_HzAhC3Vuv-TdFs8ea3KDf44vFpSA';
        if(!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVsC_HzAhC3Vuv-TdFs8ea3KDf44vFpSA';
        }
        axios.post(url, authData)
        .then(response => {
            dispatch(authSucess(response.data.idToken, response.data.localId));
            dispatch(checkExpiration(response.data.expiresIn))
        },err => {
            dispatch(authFail(err.response.data.error));
        })

    }
}