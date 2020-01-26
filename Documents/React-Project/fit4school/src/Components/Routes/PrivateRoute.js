import React from "react";
import { isUserAuthCheck } from "../../Utils/SessionStorage";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={() => {
          return isUserAuthCheck() ? <Component /> : <Redirect to="/signIn" />;
        }}
      />
    </React.Fragment>
  );
}

export default PrivateRoute;
