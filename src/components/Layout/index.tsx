import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Footer from './Footer';
import Navbar from './Navbar';
import './index.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname, search } = useLocation();
  return (
    <div className={ pathname == routeNames.account ? 'background-2 epad-layout d-flex flex-column flex-fill wrapper' : 'background-1 epad-layout d-flex flex-column flex-fill wrapper'} >
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
