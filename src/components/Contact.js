import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="area-head">
                            <h2 className="heading">Contact Us</h2>
                        </div>
                    </div>
                    <div className="col-sm-5 col-md-4  ">
                        <div className="contact-address contact-wraper">
                            <div className="sin-add">
                                <div className="add-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <p className="phone">Phone: <a href="tel:+0172554">+0172554456</a></p>
                            </div>
                            <div className="sin-add">
                                <div className="add-icon">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <p className="mail">
                                    Email:<a href="mailto:raza_box@yourdomain.com">raza_box@yourdomain.com</a>
                                </p>
                            </div>
                            <div className="sin-add">
                                <div className="add-icon">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <p className="adress">Box Company<br />1225 Donia Kaka<br />Los Angeles, California</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-8  ">
                        <div className="contact-wraper bg-dark">
                            <form className="contact-form" id="contact-form" action="/" method="post">
                                <div style={{ display: "flex" }}>
                                    <div className="col-md-6">
                                        <input placeholder="Name" name="name" type="text" />
                                    </div>

                                    <div className="col-md-6">
                                        <input placeholder="Email" name="email" type="text" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <input placeholder="Subject" name="subject" type="text" />
                                </div>
                                <div className="col-md-12">
                                    <textarea placeholder="Message" name="message"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn submit-btn" type="submit">Send Message</button>
                                </div>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
