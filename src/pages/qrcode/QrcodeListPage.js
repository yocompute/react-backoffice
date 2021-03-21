import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

// import Header from '../../components/common/Header'
import ListTable from "../../components/table/ListTable";
import QrcodeDialog from "./QrcodeDialog";

import {
  fetchQrcodes,
  createQrcode,
  updateQrcode,
  setQrcode,
} from "../../redux/qrcode/qrcode.actions";
import { selectAuthRoles } from "../../redux/auth/auth.selectors";
import { Role } from "../../const";

const columns = [
  { field: "createUTC", label: "Created Date", type: "date" },
  { field: "name", label: "Qrcode name" },
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

const defaultSort = ["createUTC", -1];

const DEFAULT_QRCODE = {
  _id: "",
  createUTC: "",
  name: "",
  description: "",
  status: "",
  brand: "",
  actions: "",
};

const QrcodeListPage = ({
  roles,
  brand,
  setQrcode,
  fetchQrcodes,
  createQrcode,
  updateQrcode,
  qrcode,
  qrcodes,
}) => {
  const [dialogOpened, setDialogOpen] = useState(false);

  useEffect(() => {
    if(roles.indexOf(Role.Super) !== -1){
      fetchQrcodes();
    }else if(roles.indexOf(Role.Admin) !== -1){
      fetchQrcodes({brand: brand._id});
    }
  }, [fetchQrcodes]);


  const handleOpenQrcodeDialog = () => {
    setQrcode(DEFAULT_QRCODE);
    setDialogOpen(true);
  };

  const handleSave = (data, id) => {
    if (id) {
      updateQrcode(data, id);
    } else {
      createQrcode(data);
    }
  };

  const handleEditRow = (row) => {
    setQrcode(row);
    setDialogOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenQrcodeDialog}
      >
        Add
      </Button>
      <QrcodeDialog
        data={qrcode}
        opened={dialogOpened}
        onClose={setDialogOpen}
        onSubmit={handleSave}
      />
      {qrcodes && (
        <ListTable
          label="qrcode"
          defaultSort={defaultSort}
          columns={columns}
          rows={qrcodes}
          onEditRow={handleEditRow}
        />
      )}
    </div>
  );
};

QrcodeListPage.propTypes = {
  createQrcode: PropTypes.func,
  fetchQrcodes: PropTypes.func,
  qrcode: PropTypes.any,
  qrcodes: PropTypes.any,
  setQrcode: PropTypes.func,
  updateQrcode: PropTypes.func
}

const mapStateToProps = (state) => ({
  roles: selectAuthRoles(state),
  brand: state.brand,
  qrcode: state.qrcode,
  qrcodes: state.qrcodes,
});

export default connect(mapStateToProps, {
  setQrcode,
  fetchQrcodes,
  createQrcode,
  updateQrcode,
})(QrcodeListPage);
