import React from "react";

function About() {
  return (
    <React.Fragment>
      {console.log("In about " + JSON.stringify(this.props))}I am In About{" "}
      {this.props.match.params.username}
    </React.Fragment>
  );
}

export default About;
