import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'

// import Header from '../../components/common/Header'
import ListTable from '../../components/table/ListTable'

import { fetchUsers } from '../../redux/user/user.actions'

const columns = [
    { field: "created", label: "Created Date" },
    { field: "imageurl", label: "Portrait", type: 'image' },
    { field: "username", label: "Username" },
    { field: "type", label: "Type" },
    { field: "phone", label: "Phone" },
    { field: "balance", label: "Balance" },
    { field: "status", label: "Status" },
    { field: "attribute", label: "Attribute" },
    { field: "actions", label: "Actions" },
];

const defaultSort = ['created', -1];

const UserListPage = ({ fetchUsers, users }) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handlePaymentMethodSelect = () => {

    }

    return (
        <div>
            {
                users &&

                <ListTable
                    label="user"
                    defaultSort={defaultSort}
                    columns={columns}
                    rows={users}
                />
            }
            {/* <Header title={'User Page'}></Header>
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(
    mapStateToProps,
    { fetchUsers }
)(UserListPage);