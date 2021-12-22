import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300">
      <div className="w-full h-full sm:h-144 sm:w-96 shadow flex bg-white rounded-lg">{children}</div>
    </div>
  );
};

export default Layout;
