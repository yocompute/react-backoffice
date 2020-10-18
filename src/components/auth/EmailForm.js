import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import './Login.scss';
import UserApi from '../../services/UserApi';
import AgreementLink from './AgreementLink';


const EmailForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [bSubmit, setSubmit] = useState();
  function handleChange(e) {
    // const name = e.target.name;
    // this.setState({ [name]: e.target.value });
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // this.setState({ bSubmitted: true });
    // this.accountSvc.login(this.state.username, this.state.password).then(tokenId => {
    //   this.accountSvc.setAccessTokenId(tokenId);
    //   // this.setState({bSubmitted: false});
    //   this.props.history.push('/order/detail');
    // });
  }

  return (
    <div>
      <Grid item xs={12} sm={12}>
        <Box m={3}>
          <TextField id="email-input" label="Email" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box m={3}>
          <TextField id="password-input" label="Password" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box m={3}>
      <AgreementLink />
      </Box>
      </Grid>
      <Link style={{ textDecoration: 'none' }} to={{ pathname: `/order` }} >
        <Button variant="outlined">Create Account</Button>
      </Link>
    </div>
  )
}

export default EmailForm;