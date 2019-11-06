import React from 'react';

import Header from './Header'
import Slider from './Slider'
import About from './About'
import Mixitup from './Mixitup'

import Service_Section from './Service-Section'

const Home = ()=> {
	return (
            <>
            <Header/>
            <Slider/>
            <About/>
            <Service_Section/>
            <Mixitup/>
            <div class="fixed-bg-wrapper color-bg">
      <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="fixed-bg">
                        <h2> <strong> Ready</strong> to start your project</h2>
                        <span><a href="#">purchase</a></span>
                        <div id="dot-matrix"></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    
            </>	
	);
}
export default Home;

