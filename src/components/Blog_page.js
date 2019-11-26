import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcum from './Breadcum'
import Header from './Header'
import Blog_List from './Blog_List'
import Contact_section from './Contact_Section';
import MapSection from './MapSection';
import Footer from './Footer';
import Contact_Section from './Contact_Section'


class Blog_page extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <>
            <Header/>
            <Breadcum/>
            <Blog_List/>
            <Contact_Section/>
            <Footer/>
            </>

        )
    }

}
export default Blog_page;