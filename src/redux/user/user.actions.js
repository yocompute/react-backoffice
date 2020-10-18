// action types
export const FETCH_USERS = 'user/FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'user/FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'user/FETCH_USERS_FAIL';

export const SET_USERS = 'user/SET_USERS';
export const SET_USER = 'user/SET_USER';

// action creators
export const fetchUsers = () => ({
    type: FETCH_USERS
})

export const fetchUsersSuccess = (users = []) => ({
    type: FETCH_USERS_SUCCESS,
    users
})

export const fetchUsersFail = error => ({
    type: FETCH_USERS_FAIL,
    error
})

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})
