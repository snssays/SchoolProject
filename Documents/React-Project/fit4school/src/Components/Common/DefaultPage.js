import React, { useEffect } from "react";
import "../../App.css";
import HomeNavbar from "../Common/HomeNavbar";
import LastContainer from "../Container/LastContainer";
import MiddleContainer from "../Container/MiddleContainer";
import SignUp from "../Forms/SignUp";
import { isUserAuthCheck } from "../../Utils/SessionStorage";
import { Redirect } from "react-router-dom";

function DefaultPage({ history }) {
  return (
    <div className="App">
      {
        <React.Fragment>
          <HomeNavbar />
          <SignUp />
          <MiddleContainer />
          <LastContainer />
        </React.Fragment>
      }
    </div>
  );
}

export default DefaultPage;
