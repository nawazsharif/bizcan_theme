import React, { Component, useState } from "react";
// import { Link } from 'react-router-dom'
import { Link, animation as scroll } from "react-scroll";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

const NavBar = props => {
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
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <a className="white navbar-brand" href="/">
          <img
            src="http://obxtheme.com/demopreview/bizcan/img/logow.png"
            alt="store"
            className="navbar-brand"
          />
        </a>
        <a className="dark navbar-brand" href="/">
          <img
            src="http://obxtheme.com/demopreview/bizcan/img/logo.png"
            alt=""
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            {isMobile ? (
              <Link
                onClick={toggle}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="slider"
                className="nav-link"
              >
                HOME
              </Link>
            ) : (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="slider"
                className="nav-link"
              >
                HOME
              </Link>
            )}
          </NavItem>
          <NavItem>
            {isMobile ? (
              <Link
                onClick={toggle}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="about"
                className="nav-link"
              >
                ABOUT US
              </Link>
            ) : (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="about"
                className="nav-link"
              >
                ABOUT US
              </Link>
            )}
          </NavItem>
          <NavItem>
            {isMobile ? (
              <Link
                onClick={toggle}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="service"
                className="nav-link"
              >
                SERVICE
              </Link>
            ) : (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="service"
                className="nav-link"
              >
                SERVICE
              </Link>
            )}
          </NavItem>

          <NavItem>
            {isMobile ? (
              <Link
                onClick={toggle}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="team"
                className="nav-link"
              >
                TEAM
              </Link>
            ) : (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="team"
                className="nav-link"
              >
                TEAM
              </Link>
            )}
          </NavItem>
          <NavDropdown title="BLOG" id="basic-nav-dropdown">
            <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="/blog-page">Blog Page</NavDropdown.Item>
          </NavDropdown>
          <NavItem>
            {isMobile ? (
              <Link
                onClick={toggle}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="contact"
                className="nav-link"
              >
                Contact
              </Link>
            ) : (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to="contact"
                className="nav-link"
              >
                Contact
              </Link>
            )}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
