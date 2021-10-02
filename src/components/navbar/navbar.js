import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import {
  Nav,
  NavLink,
  NavMenu
} from './navbarelements';
import { Hamburger } from '../hamburger'
import { Menu } from '../menu'
import FocusLock from 'react-focus-lock';
import * as Constants  from '../constants'  
import ResumeLink from './resumeLink'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Nav className="navbar"> 
        <NavMenu>
        <NavLink className="home-nav" to='/' exact activeClassName="active">
            Home
          </NavLink>
          <NavLink className="aboutme-nav" to='/readinglist' activeClassName="active">
            Reading List
          </NavLink>
          <NavLink className="resume-nav" to='/resume'  activeClassName="active">
            Resume
          </NavLink>
          <NavLink className="contact-nav" to='/contact' activeClassName="active">
            Contact
          </NavLink>
        </NavMenu>
        <div className='mobile-nav'>
          <span className='mobile-logo'>{Constants.MOBILE_LOGO}</span>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Hamburger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </div>
      </Nav>
    </>
  );
};
  
export default Navbar;