import React from "react";
import Header from "../Header/Header";

function Login() {
  return (
    <>
      <Header />
      <h3>Login to your profile</h3>
      <label>Your email:</label>
      <input type="text" />
      <label>Your password:</label>
      <input type="text" />
      {/* login button */}
    </>
  );
}

export default Login;
