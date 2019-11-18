import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Blog_Dom extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="col-sm-4">
        <div className="sin-blog">
          <div className="sin-blog-img">
            <Link to="#"><img src={this.props.img} alt="" /></Link>
          </div>
          <div className="sin-blog-det">
            <h3><Link to="#">{this.props.title}</Link></h3>
            <div className="blog-meta">
              <p>July 24, 2016 at 03:00 AM</p>
            </div>
            <div className="blog-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum optio accusantium at ducimus sunt soluta, totam nostrum veniam doloremque.</p>
              <Link to="#" className="readmore">read more</Link>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Blog_Dom;
