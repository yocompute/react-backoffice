import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ListTable from "../../components/table/ListTable";
import {
  setBrand,
  fetchBrands,
  createBrand,
  updateBrand,
} from "../../redux/brand/brand.actions";

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "logoUrl", label: "Brand Logo", type: "image" },
  { field: "name", label: "Brand Name" },
  // { field: "description", label: "Description" },
  { field: "status", label: "Status" },
  {
    field: "owner",
    label: "Owner",
    type: "object",
    property: "username",
  },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", 1];

const DEFAULT_BRAND = {
  _id: "",
  logoUrl: "",
  name: "",
  description: "",
  status: "",
  owner: "",
  createUTC: "",
  actions: "",
};

const BrandListPage = ({
  tokenId,
  brands,
  setBrand,
  fetchBrands,
}) => {
  const history = useHistory();

  useEffect(() => {
    setBrand(DEFAULT_BRAND);
  }, []);

  useEffect(() => {
    fetchBrands(tokenId);
  }, [fetchBrands]);


  const handleOpenBrandDialog = () => {
    setBrand(DEFAULT_BRAND);
    history.push('/brands/new')
  }

  const handleEditRow = (row) => {
    setBrand(row);
    setTimeout(() => {
      history.push(`/brands/${row._id}`);
    }, 100)
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenBrandDialog}
      >
        Add
      </Button>

      {brands && (
        <ListTable
          label="brand"
          defaultSort={defaultSort}
          columns={columns}
          rows={brands}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

BrandListPage.propTypes = {
  brands: PropTypes.any,
  createBrand: PropTypes.func,
  fetchBrands: PropTypes.func,
  setBrand: PropTypes.func,
  updateBrand: PropTypes.func
}

const mapStateToProps = (state) => ({
  brands: state.brands,
  tokenId: state.tokenId,
});

export default connect(mapStateToProps, {
  setBrand,
  fetchBrands,
  createBrand,
  updateBrand,
})(BrandListPage);
