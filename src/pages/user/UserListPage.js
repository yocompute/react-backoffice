import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

// import Header from '../../components/common/Header'
import ListTable from "../../components/table/ListTable";
import UserDialog from "./UserDialog";

import {
  setUser,
  fetchUsers,
  createUser,
  updateUser,
} from "../../redux/user/user.actions";

const columns = [
  { field: "createUTC", label: "Created Date" },
  { field: "imageurl", label: "Portrait", type: "image" },
  { field: "username", label: "Username" },
  { field: "email", label: "Email" },
  { field: "phone", label: "Phone" },
  { field: "type", label: "Type" },
  { field: "balance", label: "Balance" },
  { field: "status", label: "Status" },
  // { field: "attribute", label: "Attribute" },
  { field: "actions", label: "Actions" },
];

const defaultSort = ["createUTC", -1];

const DEFAULT_USER = {
  _id: "",
  createUTC: "",
  username: "",
  email: "",
  phone: "",
  password: "",
};

const UserListPage = ({
  setUser,
  fetchUsers,
  createUser,
  updateUser,
  user,
  users,
}) => {
  const history = useHistory();

  useEffect(() => {
    setUser(DEFAULT_USER);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleOpenUserFormPage = () => {
    setUser(DEFAULT_USER);
    history.push("/users/new");
  };


  const handleSave = (data, id) => {
    if (id) {
      updateUser(data, id);
    } else {
      createUser(data);
    }
  };

  const handleEditRow = (row) => {
    setUser(row);
    setTimeout(() => {
      history.push(`/users/${row._id}`);
    }, 100)
  };

  return (
    <div>
      <Button
        data-testid="add-btn"
        variant="contained"
        color="primary"
        onClick={handleOpenUserFormPage}
      >
        Add
      </Button>
      {users && (
        <ListTable
          label="user"
          defaultSort={defaultSort}
          columns={columns}
          rows={users}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

UserListPage.propTypes = {
  createUser: PropTypes.func,
  fetchUsers: PropTypes.func,
  setUser: PropTypes.func,
  updateUser: PropTypes.func,
  user: PropTypes.any,
  users: PropTypes.any
}

const mapStateToProps = (state) => ({
  user: state.user,
  users: state.users,
});

export default connect(mapStateToProps, {
  setUser,
  fetchUsers,
  createUser,
  updateUser,
})(UserListPage);
