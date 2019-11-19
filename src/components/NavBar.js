import React, { Component,useState } from 'react';
// import { Link } from 'react-router-dom'
import { Link, animation as scroll } from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const NavBar =(props) =>{
  
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
      <Navbar expand="md">
        
        <Link className="white navbar-brand" to='/'>
          <img src="http://obxtheme.com/demopreview/bizcan/img/logow.png" alt='store' className='navbar-brand' />
        </Link>
        <Link className="dark navbar-brand" to="/">
          <img src="http://obxtheme.com/demopreview/bizcan/img/logo.png" alt="" /></Link>
        <button type="button" className="navbar-toggle collapsed" onClick={toggle}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
        {/* <NavbarToggler  /> */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <Link activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='slider'
                  activeClassName='active'
                  className='nav-link'>
                  HOME
                </Link>
              </NavItem>
              <NavItem>
                <Link
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                  duration={1000}
                  to='about'
                    activeClassName='active'
                  className='nav-link'>
                  ABOUT US
                </Link>
              </NavItem>
              <NavItem>
                <Link activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='service'
                  activeClassName='active'
                  className='nav-link'>
                  SERVICE
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='works'
                  activeClassName='active'
                  className='nav-link'>
                  WORKS
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='team'
                  activeClassName='active'
                  className='nav-link'>
                  TEAM
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='blog'
                  activeClassName='active'
                  className='nav-link'>
                  BLOG
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to='contact'
                  activeClassName='active'
                  className='nav-link'>
                  Contact
                </Link>
              </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
      
    );
  

}
export default NavBar;

