import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
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
    <BsNavbar collapseOnSelect className='hero' expand='md'>
      {/* <div className='container'> */}
      <BsNavbar.Brand>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={routeNames.presale}
        >
          <div className='epad-logo'>ePAD</div>
        </Link>
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls='responsive-navbar-nav' />
      <BsNavbar.Collapse id='responsive-navbar-nav' className='nav-menu-wrap epad-nav-collapse'>
        <Nav role='navigation' className='ml-auto'>
          <Link to={ routeNames.presale } aria-current='page' className='epad-nav-link'>
            Buy EPAD
          </Link>
          <Link to={ routeNames.account } aria-current='page' className='epad-nav-link'>
            My Account
          </Link>
          <div style={{ width: '2rem' }}></div>
          {isLoggedIn ? (
            <NavItem className='epad-nav-auth-button' onClick={handleLogout}>
                Logout
            </NavItem>
          ) : (
            <Link to={ routeNames.unlock } className='epad-nav-auth-button'>
                Login
            </Link>
          )}
        </Nav>
      </BsNavbar.Collapse>
      {/* </div> */}
    </BsNavbar>
  );
};

export default Navbar;
