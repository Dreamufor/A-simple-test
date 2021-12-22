import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative px-2 py-4">
        <Link className="absolute left-4" to="/">
          <ArrowBackIcon />
        </Link>
        <div className="w-full text-center">Menu</div>
      </div>
      <hr className="w-full" />
      <div className="w-full p-4">
        <Typography>This is menu content</Typography>
      </div>
    </div>
  );
};

export default Menu;
