// import PropTypes from "prop-types";
import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Permission = ({ permission, onCheckChange }) => {

    function hasAction(c){
        return permission.actions && permission.actions[c];
    }
    function getName(action){
        const m = {
            "c": "Create",
            "r": "Read",
            "u": "Update",
            "d": "Delete",
        };
        return `${m[action]}`;
    }
    return (
        <Grid container>
            <Box flexDirection="row" p={1}>
                {permission.resource}
            </Box>
            {
                ["c","r","u","d"].map(action =>
                    <Box flexDirection="row" p={1}>
                    <FormControlLabel
                        control={<Checkbox checked={hasAction(action)} onChange={(e) => onCheckChange(e)} name={`${permission.resource},${action}`} />}
                        label={getName(action)}
                    />
                </Box>
                )
            }
        </Grid>
    )
}



export default Permission;