import React, { Component } from "react";
import ParentRouting from "./Components/Routes/ParentRouting";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ParentRouting></ParentRouting>
      </React.Fragment>
    );
  }
}

export default App;
