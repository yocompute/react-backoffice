import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'
import LocalSignupPage from './pages/auth/LocalSignupPage'

import Layout from './layout/index'
import { fetchAuth } from './redux/auth/auth.sagas'

function App({isLoggedIn}) {
  // const loggedIn = false;
  useEffect(() => {
    fetchAuth();
}, [fetchAuth]);

  return (
    <Router>
      {
      isLoggedIn
      ? <Layout />
      : <Switch>
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
            <Redirect from="/" to="/local-login" />
      </Switch>
      }
    </Router>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.tokenId
});

export default connect(
  mapStateToProps,
  {fetchAuth}
)(App);