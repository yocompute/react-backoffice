import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

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
import { fetchBrands } from '../../redux/brand/brand.actions';


const useStyles = makeStyles((theme) => ({
    formCtrl: {
      width: '100%'
    },
}));

function ProductDialog({ brands,fetchBrands, data, opened, onClose, onSubmit }) {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
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

                    <Controller
                        control={control}
                        name="name"
                        defaultValue={data.name}
                        as={<TextField
                            autoFocus
                            margin="dense"
                            label="name"
                            type="text"
                            fullWidth
                        />}
                    />

                    <Controller
                        control={control}
                        name="description"
                        as={<TextField
                            autoFocus
                            margin="dense"
                            label="Description"
                            type="text"
                            fullWidth
                        />}
                    />
                    <Controller
                        control={control}
                        name="price"
                        type="number"
                        as={<TextField
                            autoFocus
                            margin="dense"
                            label="Price"
                            type="text"
                            fullWidth
                        />}
                    />

                    <Controller
                        control={control}
                        name="cost"
                        type="number"
                        as={<TextField
                            autoFocus
                            margin="dense"
                            label="Cost"
                            type="text"
                            fullWidth
                        />}
                    />

                    <Controller
                        control={control}
                        name="taxRate"
                        type="number"
                        as={<TextField
                            autoFocus
                            margin="dense"
                            label="tax Rate"
                            type="text"
                            fullWidth
                        />}
                    />

                    <FormControl className={classes.formCtrl}>
                        <InputLabel id="product-status-select-label">Status</InputLabel>
                        <Controller
                            control={control}
                            name="status"
                            rules={{ required: true }}
                            as={
                                <Select id="product-status-select">
                                    <MenuItem key={"A"} value={"A"}>Active</MenuItem>
                                    <MenuItem key={"I"} value={"I"}>Inactive</MenuItem>
                                </Select>
                            }
                        />
                    </FormControl>

                    <FormControl className={classes.formCtrl}>
                        <InputLabel id="product-brand-select-label">Owner</InputLabel>
                        <Controller
                            control={control}
                            name="brand"
                            rules={{ required: true }}
                            as={
                                <Select id="product-brand-select">
                                    {
                                        brands &&
                                        brands.map(brand =>
                                            <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            }
                        />
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