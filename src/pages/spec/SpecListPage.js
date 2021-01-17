import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

// import Header from '../../components/common/Header'
import ListTable from "../../components/table/ListTable";
import SpecDialog from "./SpecDialog";
import {
  setSpec,
  fetchSpecs,
  createSpec,
  updateSpec,
} from "../../redux/spec/spec.actions";

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "name", label: "Spec Name" },
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

const DEFAULT_SPEC = {
  _id: "",
  logoUrl: "",
  name: "",
  description: "",
  status: "",
  brand: "",
  createUTC: "",
  actions: "",
};

const SpecListPage = ({
  specs,
  setSpec,
  fetchSpecs,
  createSpec,
  updateSpec,
}) => {
  const [dialogOpened, setDialogOpen] = useState(false);
  // const [data, setData] = useState(DEFAULT_SPEC);

  useEffect(() => {
    setSpec(DEFAULT_SPEC);
  }, []);

  useEffect(() => {
    fetchSpecs();
  }, [fetchSpecs]);

  const handleOpenSpecDialog = () => {
    setSpec(DEFAULT_SPEC);
    setDialogOpen(true);
  };

  const handleSave = (data, id) => {
    if (id) {
      updateSpec(data, id);
    } else {
      createSpec(data);
    }
  };

  const handleEditRow = (row) => {
    setSpec(row);
    setDialogOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenSpecDialog}
      >
        Add
      </Button>
      <SpecDialog
        opened={dialogOpened}
        onClose={setDialogOpen}
        onSubmit={handleSave}
      />
      {specs && (
        <ListTable
          label="spec"
          defaultSort={defaultSort}
          columns={columns}
          rows={specs}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

SpecListPage.propTypes = {
  createSpec: PropTypes.func,
  fetchSpecs: PropTypes.func,
  setSpec: PropTypes.func,
  specs: PropTypes.any,
  updateSpec: PropTypes.func
}

const mapStateToProps = (state) => ({
  specs: state.specs,
});

export default connect(mapStateToProps, {
  setSpec,
  fetchSpecs,
  createSpec,
  updateSpec,
})(SpecListPage);
