import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Happy_Client extends Component {


  render() {
    const options = {
      rewind: true,
      autoplay: true,
      slideBy: 1,
      dots: true,
      dotsEach: true,
      dotData: true
    };

    return (

      <section className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-head">
                <h2>happy clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="test-inner owl-carousel owl-theme" style={{ opacity: '1', display: 'block' }}>
              <OwlCarousel ref="gallery" items={1} options={options}>
                <div className="item">

                  <div className="single-testimonial">
                    <div className="client-test">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet natus inventore dolores velit voluptate porro excepturi, dolorem officia commodi fugit repellendus qui, quam asperiores sapiente libero unde labore debitis, aliquid.</p>
                    </div>
                    <span className="client-name">robert</span>
                    <span className="client=des">ceo, destiny</span>
                  </div>


                </div>
                <div className="item">

                  <div className="single-testimonial">
                    <div className="client-test">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet natus inventore dolores velit voluptate porro excepturi, dolorem officia commodi fugit repellendus qui, quam asperiores sapiente libero unde labore debitis, aliquid.</p>
                    </div>
                    <span className="client-name">robert</span>
                    <span className="client=des">ceo, destiny</span>
                  </div>


                </div><div className="item">

                  <div className="single-testimonial">
                    <div className="client-test">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet natus inventore dolores velit voluptate porro excepturi, dolorem officia commodi fugit repellendus qui, quam asperiores sapiente libero unde labore debitis, aliquid.</p>
                    </div>
                    <span className="client-name">robert</span>
                    <span className="client=des">ceo, destiny</span>
                  </div>


                </div>
              </OwlCarousel>

            </div>

          </div>
        </div>
      </section>




    )
  }
}
export default Happy_Client;
