import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './containers/layout';
import { Routes } from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
