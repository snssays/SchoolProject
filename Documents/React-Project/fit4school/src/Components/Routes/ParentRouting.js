import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignInTest from "../Forms/SignInTest";
import Home from "../Common/Home";

import About from "../Common/About";
import Contact from "../Common/Contact";
import NoMatch from "../Common/NoMatch";
import DefaultPage from "../Common/DefaultPage";
import NavBar from "../Common/NavBar";

class ParentRouting extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={DefaultPage}></Route>
          {<Route exact path="/signIn" component={SignInTest}></Route>}
          <Route exact path="/home" component={Home}></Route>
          <Route path="/about/:username" component={About}></Route>
          {/* <Route path="/dashboard" component={Dashboard}></Route> */}
          <Route path="/contact" component={Contact}></Route>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default ParentRouting;
