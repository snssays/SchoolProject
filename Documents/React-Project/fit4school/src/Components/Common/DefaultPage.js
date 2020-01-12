import React, { Component } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import SignUp from "../Forms/SignUp";
import MiddleContainer from "../Container/MiddleContainer";
import LastContainer from "../Container/LastContainer";
import "../../App.css";

class DefaultPage extends Component {
  //   _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      login: sessionStorage.getItem("isUserAuthenticated"),
      showSignInPopUp: false
    };
  }

  componentDidMount = () => {
    //using ismounted variable to get rid of memory leak
    // this._isMounted = true;
    //Using session storage to set user authentication to false - default
    sessionStorage.setItem("isUserAuthenticated", true);
  };

  //   componentWillUnmount() {
  //     this._isMounted = false;
  //   }
  toggleLoginStatus = () => {
    console.log(
      `Inside toggle login status - value is ${!this.toggleLoginStatus}`
    );
    this.setState({
      login: !this.state.login
    });
    var isUserAuthenticated = sessionStorage.getItem("isUserAuthenticated");
    sessionStorage.setItem("isUserAuthenticated", isUserAuthenticated);
  };

  toggleShowSignInPopUp = () => {
    console.log(
      `Inside toggle Show SignIn PopUp - Value is ${!this
        .toggleShowSignInPopUp}`
    );
    this.setState({
      showSignInPopUp: !this.state.showSignInPopUp
    });
  };

  render() {
    const { showSignInPopUp } = this.state;
    const backGroundForSignInPopUp = showSignInPopUp
      ? { opacity: 0.6, overflow: "hidden" }
      : { opacity: 1 };
    return (
      <div className="App" style={backGroundForSignInPopUp}>
        {
          <React.Fragment>
            <HomeNavbar></HomeNavbar>
            <SignUp />
            {console.log(this.props)}

            {/* {true ? (
                <SignIn
                  onClose={this.toggleShowSignInPopUp}
                  history={this.props.history}
                  className="popingup"
                />
              ) : null} */}
            <MiddleContainer />
            <LastContainer />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default DefaultPage;
