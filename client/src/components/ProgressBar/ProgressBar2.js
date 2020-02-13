import React from "react";
import * as SC from "./ProgressBar.style";
import { ReactComponent as Tick } from "../../assets/svgs/tick.svg"



function ProgressBar2() {

  return (
    <SC.ProgressBar1>
  
        <div className="step">
          <div className ="circle white ticked "><Tick/></div>
          <p className="step_description ">Your details </p>
        </div>
        <div className="step">
          <div className ="active"></div>
          <p className="step_description highlighted">Your children's details</p>
        </div>
        <div className="step">
          <div className ="circle blue"></div>
          <p className="step_description">Initial settings</p>
        </div>

     
    </SC.ProgressBar1>
  );
}

export default ProgressBar2;