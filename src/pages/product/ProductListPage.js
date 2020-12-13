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

import { setProduct, fetchProducts, createProduct, updateProduct } from '../../redux/product/product.actions'

const columns = [
    { field: "createUTC", label: "Created Date" },
    { field: "pictures", label: "Picture", type: 'picture' },
    { field: "name", label: "Product Name" },
    { field: "description", label: "Description" },
    { field: "price", label: "Price" },
    { field: "cost", label: "Cost" },
    { field: "purchaseTaxRate", label: "Purchase Tax Rate" },
    { field: "saleTaxRate", label: "Sale Tax Rate" },
    { field: "status", label: "Status" },
    { field: "brand", label: "Brand", type:'object', property: 'name' },
    // { field: "attribute", label: "Attribute" },
    { field: "actions", label: "Actions" },
];

const defaultSort = ['createUTC', -1];

const DEFAULT_PRODUCT = {
    _id: '',
    imageUrl: '',
    name:'',
    description:'',
    price:'',
    cost:'',
    taxRate:'',
    status:'A',
    brand:''
}

const ProductListPage = ({ setProduct, fetchProducts, createProduct, updateProduct, products }) => {

    const [dialogOpened, setDialogOpen] = useState(false);
    const [data, setData] = useState(DEFAULT_PRODUCT);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handlePaymentMethodSelect = () => {

    }

    const handleOpenProductDialog = () => {
        setData(DEFAULT_PRODUCT);
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
        setProduct(row);
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
        setProduct,
        fetchProducts,
        createProduct,
        updateProduct
    }
)(ProductListPage);