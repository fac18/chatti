import React from "react";
import Header from "../Header/Header";

function Register2() {
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <label>What is your child's name?</label>
      <input type="text" />
      <label>When is your child’s birthday?</label>
      <input type="text" />
      <p>What is your child’s gender?</p>
      <label htmlFor="boy">
        <input type="radio" id="boy" />
        boy
      </label>
      <label htmlFor="girl">
        <input type="radio" id="girl" />
        girl
      </label>
      <label htmlFor="other">
        <input type="radio" id="other" />
        prefer not to say
      </label>
      {/* continue button */}
    </>
  );
}

export default Register2;
