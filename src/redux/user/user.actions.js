// action types
export const FETCH_USERS = 'user/FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'user/FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'user/FETCH_USERS_FAIL';

export const CREATE_USER = 'user/CREATE_USER';
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL';

export const UPDATE_USER = 'user/UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'user/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'user/UPDATE_USER_FAIL';

export const SET_USERS = 'user/SET_USERS';
export const SET_USER = 'user/SET_USER';

// action creators
export const fetchUsers = (query) => ({
    type: FETCH_USERS,
    query
})

export const fetchUsersSuccess = (users = []) => ({
    type: FETCH_USERS_SUCCESS,
    users
})

export const fetchUsersFail = error => ({
    type: FETCH_USERS_FAIL,
    error
})

export const createUser = (data) => ({
    type: CREATE_USER,
    data
})

export const createUserSuccess = (user) => ({
    type: CREATE_USER_SUCCESS,
    user
})

export const createUserFail = error => ({
    type: CREATE_USER_FAIL,
    error
})

export const updateUser = (data) => ({
    type: UPDATE_USER,
    data
})

export const updateUserSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS,
    user
})

export const updateUserFail = error => ({
    type: UPDATE_USER_FAIL,
    error
})

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})
