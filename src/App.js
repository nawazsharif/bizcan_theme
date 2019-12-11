import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog_page from "./components/Blog_page";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog-page" exact component={Blog_page} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
