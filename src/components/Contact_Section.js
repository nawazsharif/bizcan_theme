import React, { Component } from 'react'
import Contact from './Contact'
import MapSection from './MapSection'

class Contact_section extends Component {
    render() {
        return (
            <section id="contact" className="contact-area">
                <Contact />
                <MapSection />

            </section>
        )
    }
}
export default Contact_section;