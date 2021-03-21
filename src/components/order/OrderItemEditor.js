import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import GridItem from "components/Grid/GridItem.js";
import Box from "@material-ui/core/Box";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CancelIcon from "@material-ui/icons/Cancel";
// import ApiProductService from "services/api/ApiProductService";

// item --- {productId, productName, quantity}
const OrderItem = ({
  products,
  item,
  onChangeProduct,
  onChangeQuantity,
  onDelete
}) => {
  const { t } = useTranslation();
  // const classes = useStyles();

//   const [model, setModel] = useState(item);
  // const [keyword, setKeyword] = useState('');

  const handleSelectProduct = e => {
    // const productId = e.target.value;
    // const product = products.find(p => p._id === productId);
    // onChangeProduct(product);
    // setModel({ ...model, productId: product._id, productName: product.name }); // update keyword in ProductSearch
  };

  const handleChangeQuantity = q => {
    // const quantity = +q;
    // onChangeQuantity(model.productId, quantity);
    // setModel({ ...model, quantity });
  };

  const handelDelete = () => {
    // onDelete(model);
  };

  return (
    <TableRow>
      <TableCell>
        {/* <ProductSearch 
          label={t("Product")}
          placeholder={t("Search Product Name")}
          name={model.productName}
          id={model.productId}
          onSelect={handleSelectProduct}
        /> */}

        {/* <GridItem xs={12} lg={6}> */}
          <Box pb={2}>
            <FormControl>
              <InputLabel id="product-label">{t("Product")}</InputLabel>
              <Select
                id="product"
                labelId="product-label"
                value={item.product._id}
                onChange={handleSelectProduct}
              >
                {
                    products && products.length>0 &&
                products.map(product => {
                  return (
                    <MenuItem key={product._id} value={product._id}>
                      {product.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
      </TableCell>
      <TableCell>
        <TextField
          inputProps={{
            value: item.quantity,
            onChange: e => handleChangeQuantity(e.target.value)
          }}
        />
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handelDelete()}>
          <CancelIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const OrderItemEditor = ({ items, products, onUpdateItemMap }) => {
//   const [itemMap, setItemMap] = useState({});
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     ApiProductService.getProducts({ merchantId, status: "A" }).then(
//       ({ data }) => {
//         setProducts(data.data);
//       }
//     );
//   }, [merchantId]);

  const handelAddOrderItem = () => {
    // const itMap = { ...itemMap };
    // itMap["new"] = { productId: "new", productName: "", quantity: 0 };
    // setItemMap(itMap);
    // fix me
    // if (merchantId) {
    //   ApiProductService.getProducts({ merchantId, status: "A" }).then(
    //     ({ data }) => {
    //       setProducts(data.data);
    //     }
    //   );
    // }
  };

  // item -- {productId, productName, quantity}
  const handleDelete = item => {
    // const itMap = { ...itemMap };
    // delete itMap[item.productId];
    // setItemMap(itMap);
    // onUpdateItemMap(itMap);
  };

  // product - {_id, name}
  const handleChangeProduct = product => {
    // const itMap = { ...itemMap };
    // itMap[product._id] = {
    //   productId: product._id,
    //   productName: product.name,
    //   price: product.price,
    //   cost: product.cost,
    //   taxRate: product.taxRate,
    //   quantity: 1
    // };
    // delete itMap["new"];
    // setItemMap(itMap);
    // onUpdateItemMap(itMap);
  };

  const handleChangeQuantity = (productId, quantity) => {
    // const itMap = { ...itemMap };
    // itMap[productId] = { ...itMap[productId], quantity };
    // setItemMap(itMap);
    // onUpdateItemMap(itMap);
  };

  return (
    <div>
      <IconButton onClick={() => handelAddOrderItem()}>
        <AddCircleOutlineIcon />
      </IconButton>
      {
        items && items.length > 0 &&
        items.map(it => (
          <div key={it.product._id}>
            <OrderItem
              products={products}
              item={it}
              onChangeProduct={handleChangeProduct}
              onChangeQuantity={handleChangeQuantity}
              onDelete={handleDelete}
            />
          </div>
        ))}
    </div>
  );
};

export default OrderItemEditor;
