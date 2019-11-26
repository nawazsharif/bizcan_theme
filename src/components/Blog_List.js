import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Blog_list extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      
        return (
            <section className="blog-page-content">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-md-9">
                    <div className="blog-wrapper">
                      
                       <div className="single-blog">
                           <div className="sin-post-image">
                               <img src="http://obxtheme.com/demopreview/bizcan/img/banner/9.jpg" alt=""/>
                           </div>
                            <div className="blog-detail">
                               <h3 className="blog-heading"><a href="#">THE SAMPLE HEADING TITLE</a></h3>
                               <div className="blog-meta">
                                    <span className="author-link">By <a rel="author" title="Posts by admin" href="#">admin</a></span>
                                    <span className="published"><i className="fa fa-clock-o"></i>Apr 01, 2014</span>
                                    <span className="comment-count">
                                    <i className="fa fa-comment-o"></i>
                                    <a title="Comment on Gallery Post Type" href="#"> 4 comments</a>	
                                    </span>
                                </div>
                                <div className="blog-content">
                                   <p> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.</p>
                                  <button className="btn submit-btn btn-primary blog-btn" type="submit">Read More</button>
                                </div>
                            </div>
                       </div>
                   
                       <div className="single-blog">
                           <div className="sin-post-image">
                               <img src="http://obxtheme.com/demopreview/bizcan/img/banner/8.jpg" alt=""/>
                           </div>
                            <div className="blog-detail">
                               <h3 className="blog-heading"><a href="#">THE SAMPLE HEADING TITLE</a></h3>
                               <div className="blog-meta">
                                    <span className="author-link">By <a rel="author" title="Posts by admin" href="#">admin</a></span>
                                    <span className="published"><i className="fa fa-clock-o"></i>Apr 01, 2014</span>
                                    <span className="comment-count">
                                    <i className="fa fa-comment-o"></i>
                                    <a title="Comment on Gallery Post Type" href="#"> 4 comments</a>	
                                    </span>
                                </div>
                                <div className="blog-content">
                                   <p> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.</p>
                                  <button className="btn submit-btn btn-primary blog-btn" type="submit">Read More</button>
                                </div>
                            </div>
                       </div>
                       
                 
                       <div className="single-blog">
                           <div className="sin-post-image">
                               <img src="http://obxtheme.com/demopreview/bizcan/img/banner/7.jpg" alt=""/>
                           </div>
                            <div className="blog-detail">
                               <h3 className="blog-heading"><a href="#">THE SAMPLE HEADING TITLE</a></h3>
                               <div className="blog-meta">
                                    <span className="author-link">By <a rel="author" title="Posts by admin" href="#">admin</a></span>
                                    <span className="published"><i className="fa fa-clock-o"></i>Apr 01, 2014</span>
                                    <span className="comment-count">
                                    <i className="fa fa-comment-o"></i>
                                    <a title="Comment on Gallery Post Type" href="#"> 4 comments</a>	
                                    </span>
                                </div>
                                <div className="blog-content">
                                   <p> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia libero expedita nulla, odit ratione minus sunt sequi perspiciatis illum delectus doloremque adipisci aut ut illo error esse corrupti accusantium modi.</p>
                                  <button className="btn submit-btn btn-primary blog-btn" type="submit">Read More</button>
                                </div>
                            </div>
                       </div>
                       
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="widget-area">
                    <div className="search-box">
                        <h6>search</h6>
                        <div className="input-group form-search" id="search">
                              <input className="form-control" placeholder="search" type="text"/>
                              <span className="input-group-btn">
                                <button className="btn btn-default button-search" type="button">
                                    <i className="fa fa-search"></i></button>
                              </span>
                        </div>
                    </div>
                    <div className="sin-widget">
                        <h6 className="mb-20">Recent Posts</h6>

                        <ul>
                            <li><a href="#">Distracted by the readable content 
                                <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <span>December 14, 2016</span></li>
                            <li><a href="#">When looking at its layout 
                                <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <span>Spetember 20, 2015</span></li>
                            <li><a href="#">The point of using Lorem Ipsum
                                <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                            <span>August 24, 2015</span></li>
                        </ul>
                    </div>
                    <div className="sin-widget style-two">
                        <h6 className="mb-20">Categories</h6>

                        <ul>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Web Design (10)</a> </li>
                            <li>  <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Wordpress (2)</a></li>
                            <li>  <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Html/Css (6)</a>
                            </li>
                            <li>  <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Branding (20)</a>
                            </li>
                            <li>  <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Animation (4)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sin-widget style-two">
                        <h6 className="mb-20">Archives</h6>

                        <ul>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">June 2017</a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">july 2017</a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">September 2017 </a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">October 2017</a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Juny 2014</a></li>
                        </ul>
                    </div>

                    <div className="sin-widget style-two">
                        <h6 className="mb-20">Meta</h6>

                            <ul>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Log in </a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Entries  RSS </a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">Comments  RSS</a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">October 2013</a></li>
                            <li> <i className="fa fa-angle-right" aria-hidden="true"></i><a href="#">WordPress.org</a></li>
                            </ul>
                    </div>

               </div>

                </div>
            </div>
        </div>
    </section>

        )
    }

}
export default Blog_list;