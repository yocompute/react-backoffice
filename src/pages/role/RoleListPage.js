import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

// import Header from '../../components/common/Header'
import ListTable from "../../components/table/ListTable";

import {
  setRole,
  fetchRoles,
  createRole,
  updateRole,
} from "../../redux/role/role.actions";

const columns = [
  { field: "createUTC", label: "Created Date", type: "date" },
  { field: "name", label: "Name" },
  { field: "description", label: "Description" },
  { field: "status", label: "Status" },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", -1];

const DEFAULT_ROLE = {
  _id: "",
  createUTC: "",
  name: "",
  description: "",
  permissions: [],
  status: "",
};

const RoleListPage = ({
  setRole,
  fetchRoles,
  createRole,
  updateRole,
  role,
  roles,
}) => {
  const history = useHistory();

  useEffect(() => {
    setRole(DEFAULT_ROLE);
  }, []);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const handleOpenRoleFormPage = () => {
    setRole(DEFAULT_ROLE);
    history.push("/roles/new");
  };


  const handleSave = (data, id) => {
    if (id) {
      updateRole(data, id);
    } else {
      createRole(data);
    }
  };

  const handleEditRow = (row) => {
    setRole(row);
    setTimeout(() => {
      history.push(`/roles/${row._id}`);
    }, 100)
  };

  return (
    <div>
      <Button
        data-testid="add-btn"
        variant="contained"
        color="primary"
        onClick={handleOpenRoleFormPage}
      >
        Add
      </Button>
      {roles && (
        <ListTable
          label="role"
          defaultSort={defaultSort}
          columns={columns}
          rows={roles}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

RoleListPage.propTypes = {
  createRole: PropTypes.func,
  fetchRoles: PropTypes.func,
  setRole: PropTypes.func,
  updateRole: PropTypes.func,
  role: PropTypes.any,
  roles: PropTypes.any
}

const mapStateToProps = (state) => ({
  role: state.role,
  roles: state.roles,
});

export default connect(mapStateToProps, {
  setRole,
  fetchRoles,
  createRole,
  updateRole,
})(RoleListPage);