import {all} from 'redux-saga/effects'
import { watchFetchAuth } from './auth/auth.sagas'
import { watchFetchUsers } from './user/user.sagas'
import { watchFetchProducts } from "./product/product.sagas"
// import { watchCreatePayment } from "./payment/payment.sagas";

export default function *rootSaga(){
    const [users, products] = yield all([
        watchFetchAuth(),
        watchFetchUsers(),
        watchFetchProducts(),
        // watchCreatePayment()
    ])
}