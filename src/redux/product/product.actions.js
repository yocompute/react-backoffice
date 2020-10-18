// action types
export const FETCH_PRODUCTS = 'product/FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'product/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'product/FETCH_PRODUCTS_FAIL';

export const SET_PRODUCT = 'product/SET_PRODUCT';


// action creators
export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS
})

export const fetchProductsSuccess = (products = []) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
})

export const fetchProductsFail = (error) => ({
    type: FETCH_PRODUCTS_FAIL,
    error
})

export const setProduct = (product) => ({
    type: SET_PRODUCT,
    product
})