import {
    FETCH_AUTH_SUCCESS,
    LOGOUT, 
    LOGIN_SUCCESS, 
    SIGNUP_SUCCESS
} from './auth.actions';

export const authReducer = (state = null, action) => {
    if(action && action.type === FETCH_AUTH_SUCCESS){
        return action.payload;
    }
    if(action && action.type === LOGIN_SUCCESS){
        return action.tokenId;
    }
    if(action && action.type === SIGNUP_SUCCESS){
        return action.tokenId;
    }
    if(action && action.type === LOGOUT){
        return '';
    }
    return state;
}

// export const authReducer = (state=null, action) => {
//     if(action && action.type === LOGOUT){
//         return { ...action.auth};
//     }
//     return state;
// }