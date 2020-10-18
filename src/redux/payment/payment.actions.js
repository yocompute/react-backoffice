// action types
export const FETCH_PAYMENTS = 'payment/FETCH_PAYMENTS';
export const FETCH_PAYMENTS_SUCCESS = 'payment/FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAIL = 'payment/FETCH_PAYMENTS_FAIL';

export const SET_PAYMENT = 'payment/SET_PAYMENT';


// action creators
export const fetchPayments = (payload) => ({
    type: FETCH_PAYMENTS
})

export const fetchPaymentsSuccess = (payments = []) => ({
    type: FETCH_PAYMENTS_SUCCESS,
    payments
})

export const fetchPaymentsFail = (error) => ({
    type: FETCH_PAYMENTS_FAIL,
    error
})

export const setPayment = payment => ({
    type: SET_PAYMENT,
    payment
})