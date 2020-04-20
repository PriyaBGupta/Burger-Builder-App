import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSucess = (authData) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
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

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVsC_HzAhC3Vuv-TdFs8ea3KDf44vFpSA',authData)
        .then(response => {
            console.log('Response data',response.data);
            dispatch(authSucess(response.data))
        },error => {
            console.log('Response error',error);
        })

    }
}