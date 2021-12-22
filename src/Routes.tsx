import { Typography } from '@mui/material';
import { Route, Routes as DefaultRoutes } from 'react-router-dom';
import Menu from './pages/menu';
import Register from './pages/register';

export const Routes = () => {
  return (
    <DefaultRoutes>
      <Route path="/" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Typography>404</Typography>} />
    </DefaultRoutes>
  );
};
