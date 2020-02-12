import React from "react";
import Header from "../Header/Header";

function Register4() {
  //need to know userName and childName
  const userName = "Victoria";
  const childName = "Freddie";
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <h3>Great!</h3>
      {/* happy image */}
      <h3>
        Welcome ${userName} and ${childName}
      </h3>
      {/* Start using Chatti now button */}
    </>
  );
}

export default Register4;
