import React from "react";
import Header from "../Header/Header";

function WelcomeBack1() {
  // need to know userName and last activity name

  return (
    <>
      <Header />
      <h3>Welcome back ${userName} </h3>
      <h3>Did you complete ${lastActivityName}?</h3>
      {/*yes button / no button */}
    </>
  );
}

export default WelcomeBack1;
