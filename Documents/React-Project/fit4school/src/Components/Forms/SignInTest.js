import React, { useEffect } from "react";

function SignInTest() {
  const p = useEffect(() => require("./SignIn.css"));

  return (
    <div class="contact-form">
      <h2>Please sign in!</h2>
      <form>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter Email" />
        <p>Password</p>
        <input type="password" name="" placeholder="Enter Password" />
        <input type="submit" name="" value="Sign In" />
      </form>
    </div>
  );
}

export default SignInTest;
