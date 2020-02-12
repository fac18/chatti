import React from "react";
import AboutUsContent from "../AboutUsContent/AboutUsContent";
import { ReactComponent as MainImage } from "../../assets/svgs/image_hp1.svg";
import { ReactComponent as LogoBig } from "../../assets/svgs/logo_big.svg";
import * as SC from "./homepage.style";

import { Link } from "react-router-dom";

function Homepage() {
  return (
    <SC.Homepage>
      <div className="container-flex">
        {/* chatti title */}
        <LogoBig />
        <MainImage />
        <h3 className="header-text">
          Interactive ideas to inspire special moments with your little one
          everyday
        </h3>

        <Link to="/signup">Get started{/* sign up button */}</Link>
        <Link to="/login">I already have an account{/* login button */}</Link>

        {/* footer */}
      </div>
      <AboutUsContent />
    </SC.Homepage>
  );
}

export default Homepage;
