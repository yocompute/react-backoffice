import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import VerificationCodePage from './pages/auth/VerificationCodePage';
import CreditCardPage from './pages/payment/CreditCardPage';
import PaymentListPage from './pages/payment/PaymentListPage';
import LoginSelectPage from './pages/auth/LoginSelectPage';
import LocalLoginPage from './pages/auth/LocalLoginPage';
import LocalSignupPage from './pages/auth/LocalSignupPage';
import DashbordPage from './pages/dashbord/index';
import RoleListPage from './pages/role/RoleListPage';
import RoleFormPage from './pages/role/RoleFormPage';
import UserListPage from './pages/user/UserListPage';
import userFormPage from './pages/user/userFormPage';
import BrandListPage from './pages/brand/BrandListPage';
import BrandFormPage from './pages/brand/BrandFormPage';
import CategoryListPage from './pages/category/CategoryListPage';
import ProductListPage from './pages/product/ProductListPage';
import ProductFormPage from './pages/product/ProductFormPage';
import OrderListPage from './pages/order/OrderListPage';
import OrderFormPage from './pages/order/OrderFormPage';
import QrcodeListPage from './pages/qrcode/QrcodeListPage';
import SpecListPage from './pages/spec/SpecListPage';
import SpecFormPage from './pages/spec/SpecFormPage';

import WithAuthorize from './utils/WithAuthorize';

const Routes = () => {
    return (<Switch>
            <Route path="/merchants/:id" component={HomePage} />
            <Route path="/creditcard" component={CreditCardPage} />
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            <Route path="/verify-code" component={VerificationCodePage} />
            <Route path="/payments" component={WithAuthorize(PaymentListPage, "/payments")} />
            <Route path="/roles/new" component={WithAuthorize(RoleFormPage, "/roles/new")} />
            <Route path="/roles/:id" component={WithAuthorize(RoleFormPage, "/roles/:id")} />
            <Route path="/roles" component={WithAuthorize(RoleListPage, "/roles")} />
            <Route path="/users/:id" component={userFormPage} />
            <Route path="/users" component={UserListPage} />
            <Route path="/brands/new" component={WithAuthorize(BrandFormPage, "/brands/new")} />
            <Route path="/brands/:id" component={BrandFormPage} />
            <Route path="/brands" component={BrandListPage} />
            <Route path="/categories" component={CategoryListPage} />
            <Route path="/qrcodes" component={QrcodeListPage} />
            <Route path="/products/:id" component={ProductFormPage} />
            <Route path="/products" component={ProductListPage} />
            <Route path="/orders/:id" component={OrderFormPage} />
            <Route path="/orders" component={OrderListPage} />
            <Route path="/specs/:id" component={SpecFormPage} />
            <Route path="/specs" component={SpecListPage} />
            <Route exact path="/" component={DashbordPage} />
        </Switch>
        
    )
}

export default Routes;