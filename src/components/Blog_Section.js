import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Blog_Dom from './Blog_Dom'

class Blog_Section extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'Totam veniam doloremque.',
        img: 'http://obxtheme.com/demopreview/bizcan/img/blog-1.jpg',
        date: 'July 24, 2016 at 03:00 AM',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum optio accusantium at ducimus sunt soluta, totam nostrum veniam doloremque.',
      },
      {
        id: 2,
        title: 'Laborum optio accusantium at',
        img: 'http://obxtheme.com/demopreview/bizcan/img/blog-2.jpg',
        date: 'July 24, 2016 at 03:00 AM',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .'
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        img: 'http://obxtheme.com/demopreview/bizcan/img/blog-3.jpg',
        date: 'July 24, 2016 at 03:00 AM',
        msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .',
      }
    ]
  }

  render() {
    return (
      <section id="blog" className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="area-head">
                <h2 className="heading">Our blogs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
              </div>
            </div>
          </div>
          <div className="row inner-con-wraper">
            {this.state.items.map((item, i) => {

              return (
                <Blog_Dom key={i} title={item.title} msg={item.msg} img={item.img} date={item.date} />
              )

            })
            }

          </div>
        </div>
      </section>

    )
  }
}
export default Blog_Section;
