import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import ListTable from "../../components/table/ListTable";
// import SpecDialog from "./SpecDialog";
import {
  setSpec,
  fetchSpecs,
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
}) => {
  const history = useHistory();

  useEffect(() => {
    setSpec(DEFAULT_SPEC);
  }, []);

  useEffect(() => {
    fetchSpecs();
  }, [fetchSpecs]);

  const handleOpenSpecDialog = () => {
    setSpec(DEFAULT_SPEC);
    history.push("/specs/new");
  };

  const handleEditRow = (row) => {
    setSpec(row);
    setTimeout(() => {
      history.push(`/specs/${row._id}`);
    }, 100)
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
  fetchSpecs: PropTypes.func,
  setSpec: PropTypes.func,
  specs: PropTypes.any,
}

const mapStateToProps = (state) => ({
  specs: state.specs,
});

export default connect(mapStateToProps, {
  setSpec,
  fetchSpecs,
})(SpecListPage);
