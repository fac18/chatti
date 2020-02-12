import React from "react";
import Register1 from "../Register1/Register1";
import Register2 from "../Register2/Register2";
import Register3 from "../Register3/Register3";
import Register4 from "../Register4/Register4";

function RegisterContainer() {
  return (
    <>
      {/* some logic to decide whether to show Register1/2/3/4 */}
      <Register1 />
    </>
  );
}

export default RegisterContainer;
