
import {FETCH_PAYMENTS_SUCCESS, SET_PAYMENT} from '../payment/payment.actions';

export const paymentsReducer = (state=null, action) => {
    if(action && action.type === FETCH_PAYMENTS_SUCCESS){
        return [ ...action.payments ];
    }
    return state;
}

export const paymentReducer = (state=null, action) => {
    if(action && action.type === SET_PAYMENT){
        return { ...action.payment};
    }
    return state;
}