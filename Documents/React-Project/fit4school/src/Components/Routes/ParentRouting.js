import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInTest from "../Forms/SignInTest";
import Home from "../Common/Home";
import PrivateRoute from "./PrivateRoute";
import About from "../Common/About";
import Contact from "../Common/Contact";
import NoMatch from "../Common/NoMatch";
import DefaultPage from "../Common/DefaultPage";
import NavBar from "../Common/NavBar";
import { isUserAuthCheck } from "../../Utils/SessionStorage";

const LoginContext = React.createContext();
class ParentRouting extends Component {
  //constructor(props) {
  //   super(props);

  //   this.state = {
  //     isUserAuthenticated: false
  //   };
  // }

  componentDidMount() {
    console.log("Parent routing mounted");
  }
  render() {
    // const { isUserAuthCheck } = this.state;
    return (
      <React.Fragment>
        {/* <LoginContext.Provider value={this.state}>
          {console.log(isUserAuthCheck())*/}
        {isUserAuthCheck() ? <NavBar /> : null}
        <Switch>
          <Route exact path="/">
            {isUserAuthCheck() ? <Redirect to="/home" /> : <DefaultPage />}
          </Route>
          <Route exact path="/signIn">
            {isUserAuthCheck() ? <Redirect to="/home" /> : <SignInTest />}
          </Route>
          <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          <PrivateRoute
            path="/about/:username"
            component={About}
          ></PrivateRoute>
          <PrivateRoute path="/contact" component={Contact}></PrivateRoute>
          <Route path="*" component={NoMatch}></Route>
        </Switch>
        {/* </LoginContext.Provider> */}
      </React.Fragment>
    );
  }
}

export default ParentRouting;
