import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import { userReducer } from './user/user.reducers'
import { productsReducer, productReducer } from './product/product.reduces';
import { cartReducer } from './cart/cart.reducers';
import { merchantReducer } from './merchant/merchant.reducers';

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  userReducer,
  productsReducer,
  productReducer,
  cartReducer,
  merchantReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;