import React from "react";
import Register1 from "../Register1/Register1";
import Register2 from "../Register2/Register2";
import Register3 from "../Register3/Register3";
import Register4 from "../Register4/Register4";

import Header from "../Header/Header";
import * as SC from "./RegisterContainer.style";
import ProgressBar1 from "../ProgressBar/ProgressBar1";
import ProgressBar2 from "../ProgressBar/ProgressBar2";
import ProgressBar3 from "../ProgressBar/ProgressBar3";
import postFormData from "../../utils/postFormData";
import changeToDbFormat from "../../utils/changeToDbFormat";

function RegisterContainer() {
  const [reg1, setReg1] = React.useState(null);
  const [reg2, setReg2] = React.useState(null);
  const [reg3, setReg3] = React.useState(null);

  //listens for the completion of the 3rd form page, then if all data is present (which it should be), sends post request to back end with reg3 adjusted to db format (e.g. 7pm to 19:00:00)
  //NB data format changer function currently only works for exact hours, but not e.g. 7.30pm
  React.useEffect(() => {
    if (reg1 && reg2 && reg3) {
      const modifiedFormatReg3 = changeToDbFormat(reg3);
      postFormData({ ...reg1, ...reg2, ...modifiedFormatReg3 });
    }
  }, [reg3]);

  return (
    <SC.RegisterContainer>
      <Header />
      <SC.Divider />
      {reg2 ? <ProgressBar3 /> : reg1 ? <ProgressBar2 /> : <ProgressBar1 />}
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
