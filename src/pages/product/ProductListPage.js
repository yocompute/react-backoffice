import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'

// import Header from '../../components/common/Header'
import ListTable from '../../components/table/ListTable'
import ProductDialog from './ProductDialog'

import { fetchProducts, createProduct, updateProduct } from '../../redux/product/product.actions'

const columns = [
    { field: "created", label: "Created Date" },
    { field: "imageurl", label: "Portrait", type: 'image' },
    { field: "productname", label: "Productname" },
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
    productname:'',
    email:'',
    phone:'',
    password:''
}

const ProductListPage = ({ fetchProducts, createProduct, updateProduct, products }) => {

    const [dialogOpened, setDialogOpen] = useState(false);
    const [data, setData] = useState(DEFAULT_USER);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handlePaymentMethodSelect = () => {

    }

    const handleOpenProductDialog = () => {
        setData(DEFAULT_USER);
        setDialogOpen(true);
    }

    const handleSave = (data) => {
        if(data && data._id){
            updateProduct(data);
        }else{
            createProduct(data);
        }
    }

    const handleEditRow = (row) => {
        setData(row);
        setDialogOpen(true);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenProductDialog}>Add</Button>
            <ProductDialog
                data={data}
                opened={dialogOpened}
                onClose={setDialogOpen}
                onSubmit={handleSave}
            />
            {
                products &&
                <ListTable
                    label="product"
                    defaultSort={defaultSort}
                    columns={columns}
                    rows={products}
                    onEditRow={handleEditRow}
                />
            }
            {/* <Header title={'Product Page'}></Header>
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(
    mapStateToProps,
    { 
        fetchProducts,
        createProduct,
        updateProduct
    }
)(ProductListPage);