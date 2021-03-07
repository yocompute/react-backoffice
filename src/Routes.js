import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import VerificationCodePage from './pages/auth/VerificationCodePage';
import OrderPage from './pages/order/OrderPage';
import CreditCardPage from './pages/payment/CreditCardPage';
import PaymentListPage from './pages/payment/PaymentListPage';
import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'
import LocalSignupPage from './pages/auth/LocalSignupPage';
import DashbordPage from './pages/dashbord/index'
import UserListPage from './pages/user/UserListPage'
import BrandListPage from './pages/brand/BrandListPage'
import CategoryListPage from './pages/category/CategoryListPage'
import ProductListPage from './pages/product/ProductListPage';
import ProductFormPage from './pages/product/ProductFormPage';
import OrderListPage from './pages/order/OrderListPage'
import QrcodeListPage from './pages/qrcode/QrcodeListPage';
import SpecListPage from './pages/spec/SpecListPage';
import SpecFormPage from './pages/spec/SpecFormPage';

const Routes = () => {
    return (<Switch>
            <Route path="/merchants/:id" component={HomePage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/creditcard" component={CreditCardPage} />
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            <Route path="/verify-code" component={VerificationCodePage} />
            <Route path="/payments" component={PaymentListPage} />
            <Route path="/users" component={UserListPage} />
            <Route path="/brands" component={BrandListPage} />
            <Route path="/categories" component={CategoryListPage} />
            <Route path="/qrcodes" component={QrcodeListPage} />
            <Route path="/products/:id" component={ProductFormPage} />
            <Route path="/products" component={ProductListPage} />
            <Route path="/orders" component={OrderListPage} />
            <Route path="/specs/:id" component={SpecFormPage} />
            <Route path="/specs" component={SpecListPage} />
            <Route exact path="/" component={DashbordPage} />
        </Switch>
        
    )
}

export default Routes;