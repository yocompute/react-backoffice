// action types
export const FETCH_AUTH = 'auth/FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'auth/FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAIL = 'auth/FETCH_AUTH_FAIL';

export const SET_AUTH = 'auth/SET_AUTH';

// action creators
export const fetchAuth = () => ({
    type: FETCH_AUTH
})

export const fetchAuthSuccess = (auths = []) => ({
    type: FETCH_AUTH_SUCCESS,
    auths
})

export const fetchAuthFail = error => ({
    type: FETCH_AUTH_FAIL,
    error
})

export const setAuth = (payload) => ({
    type: SET_AUTH,
    payload
})
