import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'

// import Header from '../../components/common/Header'
import ListTable from '../../components/table/ListTable'
import BrandDialog from './BrandDialog'

import { fetchBrands, createBrand, updateBrand } from '../../redux/brand/brand.actions'

const columns = [
    { field: "created", label: "Created Date" },
    { field: "imageurl", label: "Portrait", type: 'image' },
    { field: "brandname", label: "Brandname" },
    { field: "email", label: "Email" },
    { field: "phone", label: "Phone" },
    { field: "type", label: "Type" },
    { field: "balance", label: "Balance" },
    { field: "status", label: "Status" },
    // { field: "attribute", label: "Attribute" },
    { field: "actions", label: "Actions" },
];

const defaultSort = ['created', -1];

const DEFAULT_USER = {
    _id: '',
    brandname:'',
    email:'',
    phone:'',
    password:''
}

const BrandListPage = ({ fetchBrands, createBrand, updateBrand, brands }) => {

    const [dialogOpened, setDialogOpen] = useState(false);
    const [data, setData] = useState(DEFAULT_USER);

    useEffect(() => {
        fetchBrands();
    }, [fetchBrands]);

    const handlePaymentMethodSelect = () => {

    }

    const handleOpenBrandDialog = () => {
        setData(DEFAULT_USER);
        setDialogOpen(true);
    }

    const handleSave = (data) => {
        if(data && data._id){
            updateBrand(data);
        }else{
            createBrand(data);
        }
    }

    const handleEditRow = (row) => {
        setData(row);
        setDialogOpen(true);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenBrandDialog}>Add</Button>
            <BrandDialog
                data={data}
                opened={dialogOpened}
                onClose={setDialogOpen}
                onSubmit={handleSave}
            />
            {
                brands &&
                <ListTable
                    label="brand"
                    defaultSort={defaultSort}
                    columns={columns}
                    rows={brands}
                    onEditRow={handleEditRow}
                />
            }
            {/* <Header title={'Brand Page'}></Header>
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}
        </div>
    )
}

const mapStateToProps = state => ({
    brands: state.brands
});

export default connect(
    mapStateToProps,
    { 
        fetchBrands,
        createBrand,
        updateBrand
    }
)(BrandListPage);