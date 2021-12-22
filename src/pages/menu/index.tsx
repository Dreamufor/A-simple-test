import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex relative px-1 py-2">
        <Link className="absolute left-2 cursor-pointer" to="/">
          <ArrowBackIcon />
        </Link>
        <div className="w-full text-center">Menu</div>
      </div>
      <hr className="w-full" />
      <div className="w-full p-4">
        <Typography>This is munu content</Typography>
      </div>
    </div>
  );
};

export default Menu;
