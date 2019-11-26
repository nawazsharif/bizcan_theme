import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Breadcum extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      
        return (
            <section className="breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>blog</h2>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

}
export default Breadcum;