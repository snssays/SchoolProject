import React from "react";
import { withRouter } from "react-router-dom";

function HomeNavbar(props) {
  const signInPage = e => {
    e.preventDefault();
    props.history.push("/signIn");
  };

  return (
    <div className="HomepageNav">
      <span className="logo">FITNESS</span>
      <span className="signin">
        <button onClick={signInPage}>Sign in</button>
      </span>
    </div>
  );
}

export default withRouter(HomeNavbar);
