import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>  
        <NavMenu>
          <NavLink to='/announcements' activeStyle>
            Announcements
          </NavLink>
          <NavLink to='/topics' activeStyle>
            Topics
          </NavLink>
          <NavLink to='/calendar' activeStyle>
            Calendar
          </NavLink>
          <NavLink to='/aboutus' activeStyle>
            About Us
          </NavLink>
          <NavLink to='https://discord.gg/tHTuFCfu' activeStyle>
            Discord
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;