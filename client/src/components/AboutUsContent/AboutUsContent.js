import React from "react";

import * as SC from "./aboutuscontent.style";
import { ReactComponent as MainImage2 } from "../../assets/svgs/image_hp2.svg";
import { ReactComponent as MainImage3 } from "../../assets/svgs/image_hp3.svg";
import { ReactComponent as MainImage4 } from "../../assets/svgs/image_hp4.svg";

function AboutUsContent() {
  return (
    <SC.AboutUsContent>
      <h4 className="aboutus_heading">About Us</h4>
      <p className="aboutus-paragraph">
        At Chatti we know that early talk matters. By inspiring parents to build
        the habit of high quality interactions with their under 5s we will
        ensure every child starts life with an equal chance of success.{" "}
      </p>
      {/* playing image */}

      <MainImage2 />
      <h4 className="aboutus_heading">Personalised learning</h4>
      <p className="aboutus-paragraph">
        Fits into your busy life so Chatti never feels like a chore. Starts with
        your child’s age and interests. Then grows with them.
      </p>
      {/* playing image */}
      <MainImage3 />
      <h4 className="aboutus_heading">
        Boost your child’s learning with Chatti
      </h4>
      <p className="aboutus-paragraph">
        Our activities all help increase interactive talk so you and your child
        have fun while building critical skills to support school and life
        readiness.
      </p>
      {/* playing image */}
      <MainImage4 />
      <h4 className="aboutus_heading">Stay motivated with rewards</h4>
      <p className="aboutus-paragraph">
        Celebrate the time together with your child and track progress so you
        can be confident you are giving them the brain boosting language
        goodness they need to thrive.
      </p>
    </SC.AboutUsContent>
  );
}

export default AboutUsContent;
