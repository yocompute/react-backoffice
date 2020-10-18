import { put, call, select, takeEvery, takeLatest } from 'redux-saga/effects'
import PaymentApi from '../../services/PaymentApi'
import { fetchPaymentsFail, fetchPaymentsSuccess } from './payment.actions';

export function* fetchPayments(query){
    try{
        const payments = yield call(PaymentApi.get, query);
        yield put(fetchPaymentsSuccess(payments));
    }catch(error){
        yield put(fetchPaymentsFail(error));
    }
}

export function* watchFetchPayments(){
    yield takeEvery(FETCH_PAYMENTS, fetchPayments)
}

// export function* fetchPayments(action){
//     try{
//         const payload = yield call(PaymentApi.getPayments, action.payload)
//         yield put({type: 'FETCH_PAYMENTS_SUCCESS', payload})
//     } catch (error){
//         yield put({type: 'FETCH_PAYMENTS_FAIL', error})
//     }
// }


// export function* createPayment(action){
//     try{
//         const payload = yield call(PaymentApi.createPayment, action.payload)
//         yield put({type: 'CREATE_PAYMENT_SUCCESS', payload})
//     } catch (error){
//         yield put({type: 'CREATE_PAYMENT_FAIL', error})
//     }
// }

// export function* watchCreatePayment(){
//     yield takeEvery('CREATE_PAYMENT', createPayment)
// }