import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


export default class NavBar extends React.Component {
  render() {
    const pages = ['Home', 'Blog', 'Work', 'Services', 'Playground', 'About', 'Contact'];
    const navLinks = pages.map(page => {
      return (
        <NavLink to={'/' + page}>
          {page}
        </NavLink>
      )
    });
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            {navLinks}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  }
}
