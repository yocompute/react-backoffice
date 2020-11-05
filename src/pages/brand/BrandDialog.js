import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form'
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

import { fetchUsers } from '../../redux/user/user.actions';

function BrandDialog({ users, fetchUsers, data, opened, onClose, onSubmit }) {
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
        fetchUsers();
    }, [fetchUsers]);

    return (
        <Dialog open={opened} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Brand</DialogTitle>
            <form onSubmit={handleSubmit(handleOk)}>
                <DialogContent>
                    <DialogContentText>
                        To add a brand, please enter the name and description here.
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
                        // value={model.brandname}
                        fullWidth
                        inputRef={register}
                    />

                    <FormControl >
                        <InputLabel id="brand-owner-select-label">Owner</InputLabel>
                        <Controller
                            // control={control}
                            name="ownerId"
                            as={
                                <Select
                                labelId="brand-owner-select-label"
                                id="brand-owner-select"
                                // value={age}
                                // onChange={handleChange}
                            >
                                {
                                    users &&
                                    users.map(user => 
                                    <MenuItem key={user._id} value={user._id}>{user.username}</MenuItem>
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
    users: state.users
});

export default connect(
    mapStateToProps,
    { 
        fetchUsers,
        // createBrand,
        // updateBrand
    }
)(BrandDialog);