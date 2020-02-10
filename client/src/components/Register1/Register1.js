import React from "react";
import Header from "../Header/Header";

function Register1() {
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <label>Your name:</label>
      <input type="text" />
      <label>Your email:</label>
      <input type="email" />
      <label>Your password:</label>
      <input type="password" />
      {/* continue button */}
    </>
  );
}

export default Register1;
