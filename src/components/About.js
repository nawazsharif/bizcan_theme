import React from 'react';
import {Link} from 'react-router-dom'


const About =()=> {
	
		return (
            
            <div id="about" className="about-us area-wrapper">
                <div className="container">
                    <div className="row about-inner-wrapper">
                        
                        <div className="col-md-5">
                            <div className="about-image padding-left">
                                
                                <img
                    className="d-block w-100"
                    src="http://obxtheme.com/demopreview/bizcan/img/about2.png"
                    alt="First slide"
                    />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="area-head about-head">
                                <h2 className="heading">about us</h2>
                            </div>
                            <h3 className="about-sub-head">Its a creative idea </h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci ut laoreet dolore magna aliquam erat volutpat. </p>
                        
                            <span><Link className="closer" to="">read more</Link></span>
                        </div>
                    </div>
                </div>
            </div>


            
		);
	
}
export default About;
