import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
            <li className='nav-item active'>
              <Link to='#about' className='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/order-online' className='nav-link'>
                Order Online
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/reservation' className='nav-link'>
                Online Table Reservation
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-link'>
                Contact us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/cart' className='nav-link'>
                <i className='fa fa-cart-plus' /> My Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='tel:01781554418' className='nav-link'>
                <i className='fas fa-phone-volume' /> <b>01781554418</b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}
export default NavBar;

