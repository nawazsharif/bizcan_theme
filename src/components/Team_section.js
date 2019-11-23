import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
import Team_dom from './Team_dom'


class Team_section extends Component {
    state = {
        items: [
            {
                id: 1,
                name: 'Tahmeed',
                img: require('../images/team/team_1.jpg'),
                designation: 'Web Developper'
            },
            {
                id: 2,
                name: 'Tahseen',
                img: require('../images/team/team_2.jpg'),
                designation: 'Web Designer'
            },
            {
                id: 3,
                name: 'Tanvir',
                img: require('../images/team/team_3.jpg'),
                designation: 'UI/UX Designer '
            }
            ,
            {
                id: 4,
                name: 'John Will',
                img: require('../images/team/team_4.jpg'),
                designation: 'Founder '
            }
        ]
    }
    render() {
        return (
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
                        {this.state.items.map((item, i) => {
                            return (
                                <Team_dom key={i} name={item.name} designation={item.designation} img={item.img} />
                            )
                        })}

                    </div>
                </div>
            </section>
        )
    }

}
export default Team_section;