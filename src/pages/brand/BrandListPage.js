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
import { selectAuthUser, selecAuthRoles } from "../../redux/auth/auth.selectors";

import {Role} from "../../const";

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

export const DEFAULT_BUSINESS_HOURS = {
  "MON": {opening: true, start:'', end: ''}, 
  "TUE": {opening: true, start:'', end: ''},
  "WED": {opening: true, start:'', end: ''},
  "THU": {opening: true, start:'', end: ''},
  "FRI": {opening: true, start:'', end: ''},
  "SAT": {opening: true, start:'', end: ''},
  "SUN": {opening: false, start:'', end: ''},
}
const DEFAULT_BRAND = {
  _id: "",
  logoUrl: "",
  name: "",
  description: "",
  status: "",
  owner: "",
  deliverMethods: [],
  maxDeliverDistance: 5,
  minConsumption: 0,
  businessHours: DEFAULT_BUSINESS_HOURS,
  createUTC: "",
  actions: "",
};

const BrandListPage = ({
  user,
  roles,
  brands,
  setBrand,
  fetchBrands,
}) => {
  const history = useHistory();

  useEffect(() => {
    setBrand(DEFAULT_BRAND);
  }, []);

  useEffect(() => {
    if(!roles){
      return;
    }
    if(roles.indexOf(Role.Super) !== -1){
      fetchBrands();
    }else if(roles.indexOf(Role.Admin) !== -1){
      fetchBrands({owner: user._id});
    }else{
      
    }
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
  user: selectAuthUser(state),
  roles: selecAuthRoles(state),
  brands: state.brands,
});

export default connect(mapStateToProps, {
  setBrand,
  fetchBrands,
  createBrand,
  updateBrand,
})(BrandListPage);
