import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Pricing_dom extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div className="single-price" >
        <div className="single-price-rate">
          <span className="currency">$</span>
          <span className="rate">{this.props.price}</span>
          <span className="duration">/mo</span>
        </div>
        <h3 className="pricing-title">{this.props.title}</h3>
        <p>{this.props.msg}</p>
        <Link to="" className="rounded-btn">choose plan</Link>
      </div>

    )
  }
}
export default Pricing_dom;