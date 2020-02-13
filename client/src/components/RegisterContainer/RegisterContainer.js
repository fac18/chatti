import React from "react";
import Register1 from "../Register1/Register1";
import Register2 from "../Register2/Register2";
import Register3 from "../Register3/Register3";
import Register4 from "../Register4/Register4";
import PostFormData from "../../utils/postFormData";
import postFormData from "../../utils/postFormData";
import Header from "../Header/Header";
import * as SC from "./RegisterContainer.style";

function RegisterContainer() {
  const [reg1, setReg1] = React.useState(null);
  const [reg2, setReg2] = React.useState(null);
  const [reg3, setReg3] = React.useState(null);
  console.log(reg1);
  console.log(reg2);
  console.log(reg3);

  React.useEffect(() => {
    if (reg1 && reg2 && reg3) postFormData({ ...reg1, ...reg2, ...reg3 });
  }, [reg3]);

  return (
    <SC.RegisterContainer>
      <Header />
      <SC.Divider />
      PROGRESSION GRAPHIC
      <SC.Divider />
      {reg3 ? (
        <Register4 />
      ) : reg2 ? (
        <Register3 setReg3={setReg3} />
      ) : reg1 ? (
        <Register2 setReg2={setReg2} />
      ) : (
        <Register1 setReg1={setReg1} />
      )}
    </SC.RegisterContainer>
  );
}

export default RegisterContainer;
