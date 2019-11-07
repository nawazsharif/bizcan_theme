import React from 'react';
import { Link} from 'react-router-dom';
import Team_dom from './Team_dom'

const Team_section=()=>{
    return(

    <section id="team" className="team-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="area-head">
                        <h2 className="heading">Our team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
                    </div>
                </div>
            </div>
            <div className="row inner-con-wraper">
                
                <Team_dom/>
                <Team_dom/>
                <Team_dom/>
                <Team_dom/>

            </div>
        </div>
    </section>
    )

}
export default Team_section;