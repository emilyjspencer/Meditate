import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavigationLinks from './NavigationLinks';
import SideDrawer from './SideDrawer';


const MainNavigation = props => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openSideDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeSideDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return ( 
      <Fragment>
        {drawerIsOpen && <Backdrop onClick={closeSideDrawerHandler} />}
      {drawerIsOpen ? ( 
        <SideDrawer show={drawerIsOpen} onClick={closeSideDrawerHandler} >
          <nav className="main-navigation_drawer-nav">
              <NavigationLinks />
          </nav>
      </SideDrawer>
      ) : null}
    <MainHeader>
      <button className="main-navigation_menu-btn" onClick={openSideDrawerHandler}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation_title">
        <Link to="/">
          Listings
        </Link>
      </h1>
      <nav className="main-navigation_header-nav">
        <NavigationLinks />   
      </nav>
  </MainHeader>
  </Fragment>
  );
};

export default MainNavigation;