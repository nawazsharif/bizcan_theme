import React, { Component, useState } from 'react';
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
  DropdownItem
} from 'reactstrap';


const NavBar = (props) => {

  var isMobile_action = "";
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const isMobile = window.innerWidth <= 768;
  // if (isMobile) {
  //   isMobile_action = "toggle";
  // }
  // else {
  //   isMobile_action = "";
  // }

  return (

    <Navbar expand="md">

      <a className="white navbar-brand" href='/'>
        <img src="http://obxtheme.com/demopreview/bizcan/img/logow.png" alt='store' className='navbar-brand' />
      </a>
      <a className="dark navbar-brand" href="/">
        <img src="http://obxtheme.com/demopreview/bizcan/img/logo.png" alt="" /></a>
      <button type="button" className="navbar-toggle collapsed" onClick={toggle}>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      {/* <NavbarToggler  /> */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem >
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='slider'

              className='nav-link'>
              HOME
              </Link>) : (<Link

                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='slider'

                className='nav-link'>
                HOME
              </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='about'

              className='nav-link'>
              ABOUT US
                </Link>) : (<Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='about'

                className='nav-link'>
                ABOUT US
                </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='service'

              className='nav-link'>
              SERVICE
                </Link>) : (<Link activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='service'

                className='nav-link'>
                SERVICE
                </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='works'

              className='nav-link'>
              WORKS
                </Link>) : (<Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='works'

                className='nav-link'>
                WORKS
                </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='team'

              className='nav-link'>
              TEAM
                </Link>) : (<Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='team'

                className='nav-link'>
                TEAM
                </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='blog'

              className='nav-link'>
              BLOG
              <ul>
                <li class="nav-item"><a class="nav-link">TEAM</a></li>
                <li class="nav-item"><a class="nav-link">TEAM</a></li>
              </ul>
            </Link>) : (<Link
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='blog'

              className='nav-link'>
              BLOG
              <ul>
                <li class="nav-item"><a class="nav-link">TEAM</a></li>
                <li class="nav-item"><a class="nav-link">TEAM</a></li>
              </ul>
            </Link>)}

          </NavItem>
          <NavItem>
            {isMobile ? (<Link
              onClick={toggle}
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to='contact'

              className='nav-link'>
              Contact
                </Link>) : (<Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='contact'

                className='nav-link'>
                Contact
                </Link>)}

          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>

  );


}
export default NavBar;

