import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'

// import Header from '../../components/common/Header'
import ListTable from '../../components/table/ListTable'
import QrcodeDialog from './QrcodeDialog'

import { fetchQrcodes, createQrcode, updateQrcode, setQrcode } from '../../redux/qrcode/qrcode.actions'

const columns = [
    { field: "createUTC", label: "Created Date" },
    { field: "pictures", label: "Qrcode logo", type: 'picture' },
    { field: "name", label: "Qrcode name" },
    { field: "description", label: "Description" },
    { field: "status", label: "Status" },
    { field: "brand", label: "Brand", type: 'object', property:'name' },
    { field: "actions", label: "Actions" },
];

const defaultSort = ['createUTC', -1];

const DEFAULT_QRCODE = {
    _id: '',
    logoUrl:'',
    name:'',
    description:'',
    status: '',
    brand:'',
    createUTC:'',
    actions:'',
}

const QrcodeListPage = ({ setQrcode, fetchQrcodes, createQrcode, updateQrcode, qrcodes }) => {

    const [dialogOpened, setDialogOpen] = useState(false);
    const [data, setData] = useState(DEFAULT_QRCODE);

    useEffect(() => {
        fetchQrcodes();
    }, [fetchQrcodes]);

    const handlePaymentMethodSelect = () => {

    }

    const handleOpenQrcodeDialog = () => {
        setData(DEFAULT_QRCODE);
        setDialogOpen(true);
    }

    const handleSave = (data) => {
        if(data && data._id){
            updateQrcode(data);
        }else{
            createQrcode(data);
        }
    }

    const handleEditRow = (row) => {
        setData(row);
        setQrcode(row);
        setDialogOpen(true);
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenQrcodeDialog}>Add</Button>
            <QrcodeDialog
                data={data}
                opened={dialogOpened}
                onClose={setDialogOpen}
                onSubmit={handleSave}
            />
            {
                qrcodes &&
                <ListTable
                    label="qrcode"
                    defaultSort={defaultSort}
                    columns={columns}
                    rows={qrcodes}
                    onEditRow={handleEditRow}
                />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    // qrcode: state.qrcode,
    qrcodes: state.qrcodes
});

export default connect(
    mapStateToProps,
    {
        setQrcode, 
        fetchQrcodes,
        createQrcode,
        updateQrcode
    }
)(QrcodeListPage);