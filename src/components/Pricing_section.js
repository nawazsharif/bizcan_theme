import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Pricing_dom from './Pricing_dom'



class Pricing_section extends Component {
  state = {
    items: [
      {
        id: 1,
        price: 25,
        title: 'Package One',
        msg: 'Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue.'
      },
      {
        id: 2,
        price: 29,
        title: 'Package Two',
        msg: 'Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue.',
      },
      {
        id: 3,
        price: 100,
        title: 'Package Three',
        msg: 'Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue.'
      },
      {
        id: 4,
        price: 58,
        title: 'Package Four',
        msg: 'Nulla nec faucibus est. In in augue placerat, ligula quis, elementum augue.'
      }
    ]
  }
  render() {
    return (
      <section className="pricing-plan" id="price">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="area-head">
                <h2 className="heading">Pricing Table</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
              </div>
            </div>
          </div>
          <div className="row inner-con-wraper">
            {this.state.items.map((item, i) => {
              return (
                <div key={i} className="col-xs-12 col-sm-6 col-md-3">
                  <Pricing_dom price={item.price} title={item.title} msg={item.msg} />
                </div>
              )

            })
            }


          </div>
        </div>
      </section>
    )
  }
}
export default Pricing_section;