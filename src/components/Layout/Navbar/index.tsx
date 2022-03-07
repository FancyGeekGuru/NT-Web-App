import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';
import './index.scss';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar collapseOnSelect className='' expand='md' variant='dark'>
      <Container>
        <BsNavbar.Brand>
          <Link
            className='d-flex align-items-center navbar-brand mr-0'
            to={routeNames.presale}
          >
            <div className='custom-logo'>Bitxfinance</div>
          </Link>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls='responsive-navbar-nav' />
        <BsNavbar.Collapse id='responsive-navbar-nav' className='nav-menu-wrap'>
          <Nav role='navigation' className='ml-auto'>
            <Link to={ routeNames.presale } aria-current='page' className='custom-link-button custom-nav-link'>
              Buy Tokens
            </Link>
            <div style={{ width: '2rem' }}></div>
            {isLoggedIn ? (
              <NavItem onClick={handleLogout} className='custom-link-button custom-nav-auth-button'>
                  Disconnect
              </NavItem>
            ) : (
              <Link to={ routeNames.unlock } className='custom-link-button custom-nav-auth-button'>
                  Connect
              </Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
