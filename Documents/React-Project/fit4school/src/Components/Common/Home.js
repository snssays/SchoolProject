import React from "react";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <React.Fragment>
      <p> User is logged in - Home Page </p>
      {console.log(`Authentication status of the user is `)}

      <Button>Log out</Button>
    </React.Fragment>
  );
}

export default Home;
