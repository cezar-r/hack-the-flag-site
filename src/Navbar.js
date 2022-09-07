import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

import { discordUrl } from './admin-panel';

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
          <NavLink to={ discordUrl } target="_blank"
           rel="noopener noreferrer" activeStyle>
            Discord
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
