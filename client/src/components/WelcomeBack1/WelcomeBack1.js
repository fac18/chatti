import React from "react";
import Header from "../Header/Header";

function WelcomeBack1() {
  // need to know userName and last activity name
 

  return (
    <React.Fragment>
      <Header />
      <h3>Welcome back ...</h3>
      <h3>
      Did you complete ...?</h3>
      {/*yes button / no button */}
    </React.Fragment>
  );
}

export default WelcomeBack1;
