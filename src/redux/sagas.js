import {all} from 'redux-saga/effects'
import { watchFetchProducts } from "./product/product.sagas";
import { watchFetchUsers } from './user/user.sagas';
// import { watchCreatePayment } from "./payment/payment.sagas";

export default function *rootSaga(){
    const [users, products] = yield all([
        watchFetchUsers(),
        watchFetchProducts(),
        // watchCreatePayment()
    ])
}