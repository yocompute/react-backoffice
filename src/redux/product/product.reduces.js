
import {FETCH_PRODUCTS_SUCCESS, SET_PRODUCT} from '../product/product.actions';

export const productsReducer = (state=null, action) => {
    if(action && action.type === FETCH_PRODUCTS_SUCCESS){
        return [ ...action.products ];
    }
    return state;
}

export const productReducer = (state=null, action) => {
    if(action && action.type === SET_PRODUCT){
        return { ...action.product};
    }
    return state;
}