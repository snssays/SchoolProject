import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import {
  setIsUserAuthenticated,
  isUserAuthCheck
} from "../../Utils/SessionStorage";

function SignInTest() {
  let history = useHistory();

  useEffect(() => {
    require("./SignIn.css");
    setIsUserAuthenticated("false");
  });

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const signUpHandler = () => {
    console.log("In signup" + history);
    return history.push("/");
  };
  const formSubmit = e => {
    //e.preventDefault();
    const { username, password } = userData;
    axios
      .post("http://localhost:8080/reactPost", userData)
      .then(res => {
        console.log("Post request is success" + JSON.stringify(res.data));
        setIsUserAuthenticated("true");
        return <Redirect to="/home"></Redirect>;
      })
      .catch(err => sessionStorage.setItem("error", err));
  };

  return (
    <div className="higher">
      <div className="contact-form">
        <h2>Please sign in!</h2>
        <form onSubmit={formSubmit}>
          <p>Username</p>
          <input
            type="text"
            onChange={changeHandler}
            name="username"
            placeholder="Enter Username"
          />
          <p>Password</p>
          <input
            type="password"
            onChange={changeHandler}
            name="password"
            placeholder="Enter Password"
          />
          <input type="submit" value="Sign In" />
          <label>Doesn't have username?</label>
        </form>
        <input type="button" onClick={signUpHandler} value="Sign Up" />
      </div>
    </div>
  );
}

export default SignInTest;
