import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import './Login.scss';
import UserApi from '../../services/UserApi';
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
    marginBottom: '25px'
  }
}));

const EmailSignupForm = ({ onSubmit, btnText }) => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [bSubmit, setSubmit] = useState();
  function handleChange(e) {
    // const name = e.target.name;
    // this.setState({ [name]: e.target.value });
  }

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // this.setState({ bSubmitted: true });
  // this.accountSvc.login(this.state.username, this.state.password).then(tokenId => {
  //   this.accountSvc.setAccessTokenId(tokenId);
  //   // this.setState({bSubmitted: false});
  //   this.props.history.push('/order/detail');
  // });
  // }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      
      <TextField
        fullWidth
        name="username"
        label="Username"
        variant="outlined"
        margin="normal"
        inputRef={register}
      />

      <TextField
        fullWidth
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        inputRef={register}
      />

      <TextField
        fullWidth
        name="password"
        label="Password"
        variant="outlined"
        margin="normal"
        inputRef={register}
      />

      <Grid item xs={12} sm={12}>
        <Box mt={3} mb={3}>
          <AgreementLink />
        </Box>
      </Grid>

      <div className={classes.btnWrap}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          {btnText}
        </Button>
      </div>


        <Grid container justify="flex-end">
          <Grid item>
            <Link variant="body2" to={"/local-login"}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>

    </form>
  )
}

export default EmailSignupForm;