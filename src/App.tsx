import React, { createContext, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/layout';
import { Routes } from './Routes';

interface User {
  firstName: string;
  lastName: string;
}

const currentUser: User = { firstName: 'Michelle', lastName: 'Zhang' };

export const UserContext = createContext<User>(currentUser);

const App: FC = () => {
  return (
    <UserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
