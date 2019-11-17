import React, { Component } from 'react'

class Service_dom extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <div className="single-service fadeInLeft">
                <div className="sin-ser-icon">
                    <i className={this.props.icon} aria-hidden="true"></i>
                </div>
                <div className="sin-ser-content">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.msg}</p>
                </div>
            </div>
        )
    }
}
export default Service_dom;