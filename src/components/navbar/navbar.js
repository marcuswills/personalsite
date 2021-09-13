import React from 'react';
import ReactTooltip from 'react-tooltip';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarelements';
  
const Navbar = () => {
  return (
    <>
      <Nav className="navbar"> 
        <Bars />
  
        <NavMenu>
        <NavLink className="home-nav" to='/' exact activeClassName="active">
            Home
          </NavLink>
          <NavLink className="aboutme-nav" to='/readinglist' activeClassName="active">
            Reading List
          </NavLink>
          <NavLink className="resume-nav" to='/resume' activeClassName="active">
            Resume
          </NavLink>
          <NavLink className="contact-nav" to='/contact' activeClassName="active">
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;