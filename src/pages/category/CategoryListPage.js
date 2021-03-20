import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CategoryDialog from "./CategoryDialog";
import ListTable from "../../components/table/ListTable";
import {
  setCategory,
  fetchCategories,
  createCategory,
  updateCategory,
} from "../../redux/category/category.actions";
import Button from "@material-ui/core/Button";

import { selecAuthRoles } from "../../redux/auth/auth.selectors";
import { Role } from "../../const";

const DEFAULT_CATEGORY = {
  _id: "",
  createUTC: "",
  imageUrl: "",
  name: "",
  description: "",
  status: "",
  brand: "",
  actions: "",
};

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "imageUrl", label: "Category Image", type: "image" },
  { field: "name", label: "Category Name" },
  { field: "description", label: "Description" },
  { field: "status", label: "Status" },
  {
    field: "brand",
    label: "Brand",
    type: "object",
    property: "name",
  },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", 1];

const CategoryListPage = ({
  roles,
  brand,
  categories,
  setCategory,
  fetchCategories,
  createCategory,
  updateCategory,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setCategory(DEFAULT_CATEGORY);
  }, []);

  useEffect(() => {
    if(roles.indexOf(Role.Super) !== -1){
      fetchCategories();
    }else if(roles.indexOf(Role.Admin) !== -1){
      fetchCategories({brand: brand._id});
    }
  }, [fetchCategories]);

  const handleOpenCategsoryDialog = () => {
    setCategory(DEFAULT_CATEGORY);
    setDialogOpen(true);
  };

  const handleSave = (data, id) => {
    if (id) {
      updateCategory(data, id);
    } else {
      createCategory(data);
    }
  };

  const handleEditRow = (row) => {
    setCategory(row);
    setDialogOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenCategsoryDialog}
      >
        Add
      </Button>
      <CategoryDialog
        opened={dialogOpen}
        onClose={setDialogOpen}
        onSubmit={handleSave}
      />
      {categories && (
        <ListTable
          lable="category"
          columns={columns}
          rows={categories}
          defaultSort={defaultSort}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

CategoryListPage.propTypes = {
  categories: PropTypes.any,
  createCategory: PropTypes.func,
  fetchCategories: PropTypes.func,
  setCategory: PropTypes.func,
  updateCategory: PropTypes.func
}

const mapStateToProps = (state) => ({
  roles: selecAuthRoles(state),
  brand: state.brand,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCategory,
  fetchCategories,
  createCategory,
  updateCategory,
})(CategoryListPage);
