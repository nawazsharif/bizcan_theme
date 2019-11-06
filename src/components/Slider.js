import React from 'react';
import { Carousel} from 'react-bootstrap';

const Slider =()=> {
	
		return (
            <div id="slider" className="banner carousel slide carousel-fade">
			<Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://obxtheme.com/demopreview/bizcan/img/banner/4.jpg"
                    alt="First slide"
                    />
                    
                    <div className="caption-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <div className="caption-info-inner text-center">
                                        <h1 className="animated fadeInLeft">Find your Design Today</h1>
                                        <p className="animated fadeInLeft">Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
                                        <a href="#hot-deals" className="animated fadeInLeft btn btn-primary page-scroll">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
				    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://obxtheme.com/demopreview/bizcan/img/banner/5.jpg"
                    alt="Third slide"
                    />

                    <div className="caption-info">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <div className="caption-info-inner text-center">
                                        <h1 className="animated fadeInLeft">Find your Design Today</h1>
                                        <p className="animated fadeInLeft">Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
                                        <a href="#hot-deals" className="animated fadeInLeft btn btn-primary page-scroll">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://obxtheme.com/demopreview/bizcan/img/banner/6.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
		);
	
}
export default Slider;