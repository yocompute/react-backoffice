import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { QuantityInput } from '../../components/common/QuantityInput'

import { updateCart } from '../../redux/cart/cart.actions'

import Header from '../../components/common/Header'


const ProductPage = ({merchant, product, updateCart}) => {

    const [quantity, setQuantity] = useState(0);

    function handleSelect() {

    }

    function handleUpdate(quantity) {
        if(product){
            updateCart({
                productId: product._id,
                productName: product.name,
                price: product.price,
                cost: product.cost,
                taxRate: product.taxRate,
                quantity
            });
        }
    }

    return (
        <div>
            <Header title={'Product Detail'}></Header>            
            {
                product &&
                <div>

                    <div className="pic-col">
                        {/* <img src={product.pictures[0]} /> */}
                    </div>
                    <div>{product.name}</div>
                    {/* <div>${d.regularPrice}</div> */}
                    <div>${product.price}</div>
                </div>
            }


                <QuantityInput
                    onChange={handleUpdate}
                    val={quantity}>
                </QuantityInput>

                <Link style={{ textDecoration: 'none' }} to={{ pathname: `/merchants/${merchant._id}` }} >
                    <Button>Add to Order</Button>
                </Link>
        </div>
    )
}

// ProductPage.propTypes = {
//     match: PropTypes.shape({
//         params: PropTypes.shape({
//         id: PropTypes.string
//         })
//     }),
//     history: PropTypes.object
// };

const mapStateToProps = state => ({
    product: state.product,
    merchant: state.merchant
});

export default connect(
    mapStateToProps,
    {updateCart}
)(ProductPage);