import {all} from 'redux-saga/effects'
import { watchAuth } from './auth/auth.sagas'
import { watchUser } from './user/user.sagas'
import { watchFetchProducts } from "./product/product.sagas"
// import { watchCreatePayment } from "./payment/payment.sagas";

export default function *rootSaga(){
    const [users, products] = yield all([
        watchAuth(),
        watchUser(),
        watchFetchProducts(),
        // watchCreatePayment()
    ])
}