import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     scrolled: false,
  //   }
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', () => {
  //     const isTop = window.scrollY < 100;
  //     console.p
  //   })
  // }
  // componentWillMount() {
  //   // window.removeEventListener('scroll');
  // }
  render() {


    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;