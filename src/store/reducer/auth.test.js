// we neeed to call react here because there is no single line of react used in reducer
//we need not even require enzyme
import reducer from './auth';
import * as actionTypes from '../action/actionTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            error: null,
            loading: false,
            userId: null,
            authenticateRedirect: '/'
        });
    });
    it('should store the token on login', () => {
        expect(reducer(
            {
                token: null,
                error: null,
                loading: false,
                userId: null,
                authenticateRedirect: '/'
            },
            {
                type: actionTypes.AUTH_SUCCESS,
                idToken: 'some-token',
                userId: 'some-userId'

            })).toEqual({
            token: 'some-token',
            error: null,
            loading: false,
            userId: 'some-userId',
            authenticateRedirect: '/'
        });
    });
});