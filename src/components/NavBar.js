import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Link, animation as scroll } from 'react-scroll'

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg'>
        <Link className="white navbar-brand" to='/'>
          <img src="http://obxtheme.com/demopreview/bizcan/img/logow.png" alt='store' className='navbar-brand' />
        </Link>
        <Link className="dark navbar-brand" to="/"><img src="http://obxtheme.com/demopreview/bizcan/img/logo.png" alt="" /></Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
              <Link activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='about'
                activeClassName='active'
                className='nav-link'>
                ABOUT US
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                to='service'
                activeClassName='active'
                className='nav-link'>
                SERVICE
              </Link>
            </li>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
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
            </li>
            <li className='nav-item'>
              <Link
                // activeClass='active'
                // spy={true}
                // smooth={true}
                // offset={-70}
                // duration={1000}
                to='/contact'
                // activeClassName='active'
                className='nav-link'>
                CONTACT
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }

}
export default NavBar;

