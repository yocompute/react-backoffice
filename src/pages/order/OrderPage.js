import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'


// import Header from '../../components/common/Header'

const OrderPage = ({cart}) => {
    const handlePaymentMethodSelect = () => {

    }

    return (
        <div>
            {/* <Header title={'Order Page'}></Header> */}
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect>
        </div>
    )
}

OrderPage.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.any
  })
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    null
)(OrderPage);