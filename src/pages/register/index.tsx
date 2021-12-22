import { FC } from 'react';
import RegisterForm from '../../components/registerForm';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative px-1 py-2">
        <Link className="absolute left-2 cursor-pointer" to="/menu">
          <MenuIcon />
        </Link>
        <div className="w-full text-center">Register card form</div>
      </div>
      <hr className="w-full" />
      <div className="w-full p-4 flex flex-col justify-between h-full">
        <Typography>Welcome Michelle</Typography>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
