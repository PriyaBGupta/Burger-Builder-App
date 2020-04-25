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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
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
export const setAuthRedirectPath = (path) =>{
    return{
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
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
            //expiresIn is in secs
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('userId',response.data.localId);
            //we also want to store expiration time but we wil store expiration date because 
            //that gives us exact date when this token need to be expired since first login
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expirationDate', expirationDate);

            dispatch(authSucess(response.data.idToken, response.data.localId));
            dispatch(checkExpiration(response.data.expiresIn))
        },err => {
            dispatch(authFail(err.response.data.error));
        })

    }
}
// auth checkstate needs to be called at first state
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            // token is null it means you need to logout
            dispatch(authLogout());
        }else{
            
            const expirationDate = new Date(localStorage.getItem('expirationDate')); 
            if(expirationDate > new Date() ){
                //token is present then again set the expiration time and also run auth success
                const userId = localStorage.getItem('userId');
                const expirationTime = (expirationDate.getTime() - new Date().getTime())/1000;
                dispatch(authSucess(token,userId))
                // here arguments for checkExpiration is in secs
                // we need
                dispatch(checkExpiration(expirationTime));
            }else{
                //we need to logout
                dispatch(authLogout());
            }
        }
    }
}