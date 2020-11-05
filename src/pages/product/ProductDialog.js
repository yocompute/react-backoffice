import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fetchBrands } from '../../redux/brand/brand.sagas';

function ProductDialog({ brands,fetchBrands, data, opened, onClose, onSubmit }) {
    const { register, handleSubmit, setValue, watch, errors } = useForm();
    // const [model, setModel] = useState(data);
    const handleClose = () => {
        onClose(false);
    };

    const handleOk = (d) => {
        onSubmit(d);
        onClose(false);
    }

    useEffect(() => {
        fetchBrands();
    }, [])

    return (
        <Dialog open={opened} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
            <form onSubmit={handleSubmit(handleOk)}>
                <DialogContent>
                    <DialogContentText>
                        To add a product, please enter the name and description here.
          </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="name"
                        type="text"
                        defaultValue={data.name}
                        fullWidth
                        inputRef={register}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        // value={model.productname}
                        fullWidth
                        inputRef={register}
                    />

                    <FormControl >
                        <InputLabel id="product-owner-select-label">Owner</InputLabel>
                        <Select
                            labelId="product-owner-select-label"
                            id="product-owner-select"
                            name="ownerId"
                            // value={age}
                            // onChange={handleChange}
                            inputRef={register}
                        >
                            {
                                brands &&
                                brands.map(brand => 
                                    <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>
                                )
                            }
                           
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

const mapStateToProps = state => ({
    brands: state.brands
});

export default connect(
    mapStateToProps,
    { 
        fetchBrands,
        // createBrand,
        // updateBrand
    }
)(ProductDialog);