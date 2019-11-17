import React, { Component } from 'react'
import Service_dom from './Service-dom'


class Service_Section extends Component {

    state = {
        items: [
            {
                id: 1,
                title: 'Great Custmer Care',
                icon: 'fa fa-thumbs-o-up',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .',
            },
            {
                id: 2,
                title: 'Web Design & UI',
                icon: 'fa fa-arrows',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .'
            },
            {
                id: 3,
                title: 'Money Back Gurantee',
                icon: 'fa fa-money',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .',
            },
            {
                id: 4,
                title: 'Unlimited Features',
                icon: 'fa fa-envira',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error porro est perspiciatis quod quae dolores assumenda ipsum libero deleniti .',
            }
        ]
    }
    render() {
        return (
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

                        {this.state.items.map((item, i) => {

                            return (
                                <div key={i} className="col-sm-6 col-md-3">
                                    <Service_dom icon={item.icon} title={item.title} msg={item.msg} />

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
export default Service_Section;