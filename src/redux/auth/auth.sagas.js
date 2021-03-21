import { put, call, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import AuthApi from '../../services/AuthApi';
import { FETCH_AUTH, LOGIN, SIGNUP, LOGOUT,
    setAuth, fetchAuthSuccess, loginSuccess, signupSuccess, logoutSuccess } from './auth.actions';
import { setUser } from '../user/user.actions';
import { setLoading } from '../page/page.actions';

// import { selectACL } from '../ACL/ACL.selectors'
import {JWT_COOKIE, JWT_EXPIRY} from '../../const';
import { setNotification } from '../notification/notification.actions';
import { httpSuccess } from '../notification/notification.sagas';

export function* fetchAuth() {
    try {
        const tokenId = Cookies.get(JWT_COOKIE);
        if(tokenId){
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, tokenId);
            if(httpSuccess(status)){
                const user = data && data._id ? data : null;
                const token = data? tokenId : null;
                yield put(fetchAuthSuccess(token, user));
            }else{
                yield put(setNotification(error, status));
            }
        }else{
            yield put(fetchAuthSuccess(null, null));
        }
        yield put(setLoading(false));
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* login(action) {
    try {
        const {data, error, status} = yield call(AuthApi.login, action.data);
        const tokenId = data;

        Cookies.set(JWT_COOKIE, tokenId, { expires: JWT_EXPIRY });
        yield put(loginSuccess(tokenId));
        if(httpSuccess(status)){
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, tokenId);
            const user = data && data._id ? data : null;
            const token = data? tokenId : null;
            yield put(setAuth(token, user));
        }else{
            yield put(setAuth(null, null));
            yield put(setNotification(error, status));
        }
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* signup(action) {
    try {
        const {data, error, status} = yield call(AuthApi.signup, action.data);
        const tokenId = data;
        if(httpSuccess(status)){
            yield put(signupSuccess(tokenId));
            const {data, error, status} = yield call(AuthApi.getUserByTokenId, tokenId);
            const user = data && data._id ? data : null;
            const token = data? tokenId : null;
            yield put(setAuth(token, user));
        }else{
            yield put(setAuth(null, null));
            yield put(setNotification(error, status));
        }
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* logout(){
    Cookies.remove(JWT_COOKIE);
    yield put(logoutSuccess());
}

export function* watchAuth() {
    yield takeLatest(FETCH_AUTH, fetchAuth);
    yield takeLatest(LOGIN, login);
    yield takeLatest(SIGNUP, signup);
    yield takeLatest(LOGOUT, logout);
}