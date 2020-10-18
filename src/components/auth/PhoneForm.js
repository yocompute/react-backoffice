import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AgreementLink from './AgreementLink';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    btnWrap: {
      textDecoration: 'none',
    }
  }));

  const PhoneForm = ({ onSubmit, btnText }) => {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();

    const [type, setType] = useState(0);
    const handleChange = () => {

    }
    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

            <TextField
                fullWidth
                id="phone-input"
                label="Phone"
                variant="outlined"
                margin="normal"
                inputRef={register}
            />
    
            <Grid item xs={12} sm={12}>
                <Box mt={3} mb={3}>
                    <AgreementLink />
                </Box>
            </Grid>
    
            <Link className={classes.btnWrap} to={'verify-code' } >
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btn}
            >
                {btnText}
            </Button>
            </Link>
        </form>
    )
}

export default PhoneForm;