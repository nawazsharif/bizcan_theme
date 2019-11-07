import React from 'react';
import { Link} from 'react-router-dom';

const Tean_dom =()=> {
    return(
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="sin-team">
                    <div className="sin-team-img">
                        <img src="http://obxtheme.com/demopreview/bizcan/img/t1.jpg" alt=""/>
                        <div className="team-social-wrapper">
                            <div className="team-social">
                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                            <Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                            <Link to="#"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sin-team-det">
                        <h2>John Will</h2>
                        <span>Founder</span>
                    </div>
                </div>
            </div>
    
)
                
       
}
    export default Tean_dom;