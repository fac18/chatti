import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import { ReactComponent as MainImage } from "../../assets/svgs/image_hp1.svg";
import { ReactComponent as LogoBig } from "../../assets/svgs/logo_big.svg";
import * as SC from './homepage.style';



function Homepage() {
  return (
    <SC.Homepage>
      <div className="container">
        {/* chatti title */}
        {/* graphic of child and adult */}
        <LogoBig/>
        <MainImage/>
        <h3>
          Interactive ideas to inspire special moments with your little one
          everyday
        </h3>
        {/* sign up button */}
        {/* login button */}
    
        <AboutUs />
    
        {/* sign up button */}
        {/* footer */}
      </div>
    </SC.Homepage>
  );
}

export default Homepage;
