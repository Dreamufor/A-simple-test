import { Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './containers/layout';
import Menu from './pages/menu';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Typography>404</Typography>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
