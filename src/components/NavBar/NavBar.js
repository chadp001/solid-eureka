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
  login () {
    this.props.signedIn = true;
  }
  logout () {
    this.props.signedIn = false;
  }
  render() {
    const pages = ['Home', 'Blog', 'Work', 'Services', 'Playground', 'About', 'Contact'];
    const navLinks = pages.map(page => {
      return (
        <NavLink to={'/' + page}>
          {page}
        </NavLink>
      )
    });
    if (this.props.signedIn === false) {
  	  return (
        <>
          <Nav>
            <Bars />
            <NavMenu>
              {navLinks}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin' onClick={this.login}>Sign In</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
  	} else {
      return (
        <>
          <Nav>
            <Bars />
            <NavMenu>
              {navLinks}
            </NavMenu>
            <NavBtn>
              <h1>Hi there, {this.props.name}!</h1>
              <NavBtnLink to='/home' onClick={this.logout}>Sign Out</NavBtnLink>
            </NavBtn>
          </Nav>
        </>
      );
  	}
  }
}
