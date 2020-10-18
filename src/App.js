import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'
import LocalSignupPage from './pages/auth/LocalSignupPage'

import Layout from './layout/index'
import { fetchAuth } from './redux/auth/auth.sagas'

function App({loggedIn}) {
  // const loggedIn = false;
  useEffect(() => {
    fetchAuth();
}, [fetchAuth]);

  return (
    <Router>
      {
      loggedIn
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

// export default App;

// HomePage.propTypes = {
//   match: PropTypes.shape({
//       params: PropTypes.shape({
//       id: PropTypes.string
//       })
//   }),
//   history: PropTypes.object
// };

const mapStateToProps = state => ({
  loggedIn: state.auth
});

export default connect(
  mapStateToProps,
  {fetchAuth}
)(App);