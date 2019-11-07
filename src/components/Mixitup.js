import React,{Component} from 'react'
import ReactMixitup from 'react-mixitup'
import { shuffle, range } from 'lodash'
import {Link} from 'react-router-dom'
 
class Mixitup extends Component {
  state = { items: [
    {
      id: 1,
      title: 'Papyrus',
      type: 'ecommerce',
    },
    {
      id: 2,
      title: 'Clinton Foundation',
      type: 'intranet'
    },
    {
      id: 3,
      title: 'Maddie',
      type: 'ecommerce',
    },
    {
      id: 4,
      title: 'WCHN',
      type: 'intranet',
    },
  ]
}
 
  shuffle = () =>
    this.setState({
      items: shuffle(range(Math.round(Math.random() * 15)))
    })
    applyFilter(filter) {
        this.setState({ filter }, this.renderItems);
    }
    
 
  render() {
      
    return (
        <section id="works" className="work area-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="area-head">
                            <h2 className="heading">Our works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="work-filter">
                        <ul className="mixitup-button">
                        {/* <button type="button" onClick={this.applyFilter.bind(this, '')}>Show all</button>
            <button type="button" onClick={this.applyFilter.bind(this, 'ecommerce')}>Show ecommerce</button>
            <button type="button" onClick={this.applyFilter.bind(this, 'intranet')}>Show intranets</button> */}
                            <li className="filter active" data-filter="all">all</li>
                            <li className="filter" data-filter=".two">design</li>
                            <li className="filter" data-filter=".three">photography</li>
                            <li className="filter" data-filter=".four">video</li>
                            <li className="filter" data-filter=".five">web</li>
                        </ul>
                        <div className="mixitup-content" id="mixstart">
                        {this.state.items.map((item,i)=>{

                          return(
                            <div key={i} className="mix col-xs-12 col-sm-6  col-md-4">
                                <div className="mix-wrapper">
                                    <img src="http://obxtheme.com/demopreview/bizcan/img/filter/m13.jpg" alt=""/>
                                    <div className="overlay"></div>
                                    <div className="work-icon">
                                        <div className="work-des"><p>still life picture</p></div>
                                        <Link to=""><i className="fa fa-link" aria-hidden="true"></i></Link>
                                        <Link to="#"><i className="fa fa-search" aria-hidden="true"></i></Link>
                                    </div> 
                                </div>    
                            </div> 
                          )
                        })}
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
  }
}
export default Mixitup;