import React from 'react';
import { Link } from 'react-router-dom'

import Header from './Header'
import Slider from './Slider'
import About from './About'
import Mixitup from './Mixitup'
import Team_section from './Team_section'
import Pricing_section from './Pricing_section'


import Service_Section from './Service-Section'
import Happy_Client from './Happy_Client';
import Blog_Section from './Blog_Section'
import Footer from './Footer';
import Client_section from './Client_section'
import Contact_Section from './Contact_Section'

const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <About />
            <Service_Section />
            {/* <Mixitup /> */}
            <div className="fixed-bg-wrapper color-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="fixed-bg">
                                <h2> <strong> Ready</strong> to start your project</h2>
                                <span><Link to="#">purchase</Link></span>
                                <div id="dot-matrix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Team_section />
            <Pricing_section />
            <Happy_Client />
            <Blog_Section />
            <Client_section/>
            <Contact_Section/>

            <Footer />

        </>
    );
}
export default Home;

