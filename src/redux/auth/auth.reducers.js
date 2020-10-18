import {FETCH_AUTH_SUCCESS, SET_AUTH} from './auth.actions';

export const authReducer = (state = null, action) => {
    if(action && action.type === FETCH_AUTH_SUCCESS){
        return action.payload;
    }
    if(action && action.type === SET_AUTH){
        return action.payload;
    }
    return state;
}

// export const authReducer = (state=null, action) => {
//     if(action && action.type === SET_AUTH){
//         return { ...action.auth};
//     }
//     return state;
// }