import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { CartItemList } from "../../components/cart/CartItemList";
import { PaymentMethodSelect } from "../../components/common/PaymentMethodSelect";

// import Header from '../../components/common/Header'
import ListTable from "../../components/table/ListTable";
import ProductFormPage from "./ProductFormPage";

import {
  setProduct,
  fetchProducts,
  createProduct,
  updateProduct,
  fetchAdditions
} from "../../redux/product/product.actions";

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "pictures", label: "Picture", type: "picture" },
  { field: "name", label: "Product Name" },
  { field: "description", label: "Description" },
  { field: "price", label: "Price" },
  { field: "cost", label: "Cost" },
  { field: "purchaseTaxRate", label: "Purchase Tax Rate" },
  { field: "saleTaxRate", label: "Sale Tax Rate" },
  { field: "status", label: "Status" },
  {
    field: "brand",
    label: "Brand",
    type: "object",
    property: "name",
  },
  {
    field: "category",
    label: "Category",
    type: "object",
    property: "name",
  },
  // { field: "attribute", label: "Attribute" },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", -1];

const DEFAULT_PRODUCT = {
  _id: "",
  createUTC: "",
  pictures: [],
  name: "",
  description: "",
  price: "",
  cost: "",
  purchaseTaxRate: "",
  saleTaxRate: "",
  status: "",
  brand: "",
  category: "",
};

const ProductListPage = ({
  product,
  products,
  additions,
  setProduct,
  fetchProducts,
  createProduct,
  updateProduct,
  fetchAdditions
}) => {
  const [dialogOpened, setDialogOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlePaymentMethodSelect = () => {};

  const handleNewProductFormPage = () => {
    setProduct(DEFAULT_PRODUCT);
    // setDialogOpen(true);
    history.push("/products/new");
  };

  const handleSave = (data, id) => {
    if (id) {
      updateProduct(data, id);
    } else {
      createProduct(data);
    }
  };

  const handleEditRow = (row) => {
    setProduct(row);
    fetchAdditions({brand: row.brand});
    // setDialogOpen(true);
    history.push(`/products/${row._id}`);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNewProductFormPage}
      >
        Add
      </Button>

      {products && (
        <ListTable
          label="product"
          defaultSort={defaultSort}
          columns={columns}
          rows={products}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  products: state.products,
  additions: state.additions
});

export default connect(mapStateToProps, {
  setProduct,
  fetchProducts,
  createProduct,
  updateProduct,
  fetchAdditions
})(ProductListPage);
