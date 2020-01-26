import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { clearSession } from "../../Utils/SessionStorage";
import { Redirect, useHistory } from "react-router-dom";

function NavBar() {
  let history = useHistory();
  const cleanUp = e => {
    clearSession();
    return <Redirect to="/signIn"></Redirect>;
  };

  return (
    <React.Fragment>
      {console.log("In Nav-Bar")}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="logo" href="/home">
          FITNESS
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Button variant="outline-secondary" onClick={cleanUp}>
          Logout
        </Button>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
