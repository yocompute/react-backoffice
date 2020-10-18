

import {FETCH_USERS_SUCCESS, SET_USER} from './user.actions';

export const usersReducer = (state = [], action) => {
    if(action && action.type === FETCH_USERS_SUCCESS){
        return [ ...action.users ];
    }
    return state;
}

export const userReducer = (state=null, action) => {
    if(action && action.type === SET_USER){
        return { ...action.user};
    }
    return state;
}