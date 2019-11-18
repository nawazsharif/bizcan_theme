import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer-widget" >
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-footer">
                  <div className="sin-footer-head">
                    <h5>about us</h5> </div>
                  <div className="sin-footer-con">
                    <p>Lorem ipsum dolor sit amet, consectetuer adips Aiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="single-footer">
                  <div className="sin-footer-head">
                    <h5>about us</h5> </div>
                  <div className="sin-footer-con">
                    <p>Lorem ipsum dolor sit amet, consectetuer adips Aiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="single-footer">
                  <div className="sin-footer-head">
                    <h5>Support</h5> </div>
                  <div className="sin-footer-con">
                    <div className="sin-sup-link">
                      <ul>
                        <li> <Link to="#">Support</Link></li>
                        <li> <Link to="#">Terms &amp; Service</Link></li>
                        <li> <Link to="#">Privace Policy</Link></li>
                        <li> <Link to="#">Help</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-footer">
                  <div className="sin-footer-head">
                    <h5>Subscribe</h5>
                  </div>
                  <div className="sin-footer-con">
                    <p>Lorem ipsum dolor sit amet, consectetuer adips Aiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <div className="subscribe-link">
                      <input type="text" placeholder="Your E-mail" />
                      <button className="mail-send">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer-social">
                  <ul>
                    <li> <Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to=""><i className="fa fa-pinterest" aria-hidden="true"></i>
                    </Link></li>
                    <li><Link to=""><i className="fa fa-dribbble" aria-hidden="true"></i>
                    </Link></li>
                    <li><Link to=""><i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link></li>
                    <li> <Link to=""><i className="fa fa-rss" aria-hidden="true"></i>
                    </Link> </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>

        </section >
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p> © 2018 ‐ BizCan All rights reserved. Designed by Obxtheme </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
}
export default Footer; 
