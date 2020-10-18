import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';



import Layout from './components/layout/index'

function App() {
  return (
    <Router>
      <Layout>
      </Layout>
    </Router>
  );
}

export default App;
