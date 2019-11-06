import React from 'react'
import Service_dom from './Service-dom'

const Service_Section =()=>{
    return(
        <section id="service" className="service area-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="area-head">
                        <h2 className="heading">always best Service</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
                    </div>
                </div>
            </div>
            <div className="row inner-con-wraper">
                <div className="col-sm-6 col-md-3">
                    
                <Service_dom/>
                </div>
                <div className="col-sm-6 col-md-3">
                    
                <Service_dom/>
                </div>
                <div className="col-sm-6 col-md-3">
                <Service_dom/>
                </div>
                <div className="col-sm-6 col-md-3">
                <Service_dom/>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Service_Section;