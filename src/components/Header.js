import React, { Component } from 'react';
import NavBar from './NavBar'

class Header extends Component {

    constructor() {
        super();
        this.state = {
            scrolled: false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== true) {
                this.setState({ scrolled: true })

            }
            else {
                this.setState({ scrolled: false })
            }
        })
    }
    componentWillMount() {
        // window.removeEventListener('scroll');

    }

    render() {

        return (
            <header className={this.state.scrolled ? 'main-navigation stick' : 'main-navigation'} id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <NavBar />
                        </div>
                    </div>
                </div>
            </header>

        );
    }

}
export default Header;

