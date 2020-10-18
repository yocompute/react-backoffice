import { put, call, select, takeLatest } from 'redux-saga/effects'

import { FETCH_PRODUCTS, fetchProductsFail, fetchProductsSuccess } from './product.actions';
import ProductApi from '../../services/ProductApi';

export function* fetchProducts(query){
    try{
        const products = yield call(ProductApi.get, query);
        yield put(fetchProductsSuccess(products));
    }catch(error){
        yield put(fetchProductsFail(error));
    }
}

export function* watchFetchProducts(){
    yield takeLatest(FETCH_PRODUCTS, fetchProducts)
}