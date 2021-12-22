import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300 ">
      <div className="h-96 w-72 shadow flex bg-white">{children}</div>
    </div>
  );
};

export default Layout;
