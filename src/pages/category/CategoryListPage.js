import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CategoryDialog from "./CategoryDialog";
import ListTable from "../../components/table/ListTable";
import {
  fetchCategories,
  createCategory,
  updateCategory,
} from "../../redux/category/category.actions";
import Button from "@material-ui/core/Button";

const DEFAULT_CATEGORY = {
  _id: "",
  imageUrl: "",
  name: "",
  description: "",
  status: "",
  owner: "",
  createUTC: "",
  actions: "",
};

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "imageUrl", label: "Category Image", type: "image" },
  { field: "name", label: "Category Name" },
  { field: "description", label: "Description" },
  { field: "status", label: "Status" },
  { field: "owner", label: "Owner", type: "object", property: "username" },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", 1];

const CategoryListPage = ({
  categories,
  fetchCategories,
  createCategory,
  updateCategory,
}) => {
  const [data, setData] = useState(DEFAULT_CATEGORY);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleOpenCategsoryDialog = () => {
    setData(DEFAULT_CATEGORY);
    setDialogOpen(true);
  };

  const handleSave = (data) => {
    if (data && data._id) {
      updateCategory(data);
    } else {
      createCategory(data);
    }
  };

  const handleEditRow = (row) => {
    setData(row);
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
        data={data}
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

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  fetchCategories,
  createCategory,
  updateCategory,
})(CategoryListPage);
