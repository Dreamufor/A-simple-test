import { FC, useContext } from 'react';
import RegisterForm from '../../components/registerForm';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const user = useContext(UserContext);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative px-2 py-4">
        <Link className="absolute left-4" to="/menu">
          <MenuIcon />
        </Link>
        <div className="w-full text-center">Register card form</div>
      </div>
      <hr className="w-full" />
      <div className="w-full p-4 flex flex-col justify-between h-full">
        <Typography>Welcome {user.firstName}</Typography>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
