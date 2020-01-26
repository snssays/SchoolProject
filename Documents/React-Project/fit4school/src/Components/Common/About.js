import React from "react";
import { useParams } from "react-router-dom";

function About(...rest) {
  let { username } = useParams();
  return (
    <React.Fragment>
      {console.log("In about " + JSON.stringify(rest))}I am In About {username}
    </React.Fragment>
  );
}

export default About;
