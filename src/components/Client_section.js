import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Client_section extends Component {
    state = {
        items: [
          {
            id: 1,
            title: 'Totam veniam doloremque.',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l1.png'
           },
          {
            id: 2,
            title: 'Laborum optio accusantium at',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l2.png'
           },
          {
            id: 3,
            title: 'Lorem ipsum dolor sit amet',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l3.png'
           },
           {
            id: 4,
            title: 'Totam veniam doloremque.',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l4.png'
           },
          {
            id: 5,
            title: 'Laborum optio accusantium at',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l5.png'
           },
          {
            id: 6,
            title: 'Lorem ipsum dolor sit amet',
            img: 'http://obxtheme.com/demopreview/bizcan/img/client/l6.png'
           }
        ]
      }

  render() {
    const options = {
      rewind: true,
      autoplay: true,
      slideBy: 1,
      dots:false,
      nav:true
      
    };

    return (

        <section className="client-logo-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                
              <OwlCarousel className="client-logo" ref="gallery" items={4} options={options}>

              {this.state.items.map((item, i) => {
                    return (
                

                <div key={i} className="sin-cl">
                            <Link to="#"><img src={item.img} alt=""/></Link>  
                       </div>


                

)
})
}
                
              </OwlCarousel>
              
                </div>
            </div>
        </div>
    </section>
            

           




    )
  }
}

export default Client_section;