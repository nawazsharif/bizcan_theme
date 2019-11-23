import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image_1 from '../images/team/team_1.jpg'
import image_2 from '../images/team/team_2.jpg'
import image_3 from '../images/team/team_3.jpg'
import image_4 from '../images/team/team_4.jpg'

class Tean_dom extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props.img);
        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="sin-team">
                    <div className="sin-team-img">
                        <img src={this.props.img} alt="" />
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
                        <h2>{this.props.name}</h2>
                        <span>{this.props.designation}</span>
                    </div>
                </div>
            </div>

        )
    }

}
export default Tean_dom;