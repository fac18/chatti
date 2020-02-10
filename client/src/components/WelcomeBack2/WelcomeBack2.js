import React from "react";
import Header from "../Header/Header";

function WelcomeBack2() {
  // need to know user achievements and last activity name

  return (
    <>
      <Header />
      <h3>Great!</h3>
      <h3>That’s XXXX Chatti minutes and XXXX collected</h3>
      {/* happy graphic */}
      <h3>Rate ${lastActivityName}</h3>
      {/* stars rating thing - on click move to next page */}
    </>
  );
}

export default WelcomeBack2;
