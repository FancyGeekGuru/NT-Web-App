import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import './index.scss';
import WalletPng from 'assets/img/Wallet.png';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar collapseOnSelect className='' expand='md' variant='dark'>
      <Container>
        <div></div>
        <BsNavbar.Toggle aria-controls='responsive-navbar-nav' />
        <BsNavbar.Collapse id='responsive-navbar-nav' className='nav-menu-wrap'>
          <Nav role='navigation'>
            <Link to={routeNames.dashboard} aria-current='page' className='custom-link-button custom-nav-link'>
              DASHBOARD
            </Link>
            <div style={{ width: '1rem' }}/>
            <Link to={routeNames.mypage} aria-current='page' className='custom-link-button custom-nav-link'>
              MY PAGE
            </Link>
            <div style={{ width: '1rem' }}/>
            <Link to={routeNames.earn} aria-current='page' className='custom-link-button custom-nav-link'>
              EARN
            </Link>
            <div style={{ width: '1rem' }}/>
            <Link to={routeNames.utility} aria-current='page' className='custom-link-button custom-nav-link'>
              UTILITY+
            </Link>
            <div style={{ width: '1rem' }}/>
            <div>
              {isLoggedIn ? (
                <NavItem onClick={handleLogout} className='custom-link-button custom-nav-auth-button'>
                  Disconnect Wallet
                </NavItem>
              ) : (
                <Link to={routeNames.unlock} className='custom-link-button custom-nav-auth-button'>
                  <img src={WalletPng} style={{ paddingRight: '.6rem' }} />
                  <span>Connect Wallet</span>
                </Link>
              )}
            </div>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
