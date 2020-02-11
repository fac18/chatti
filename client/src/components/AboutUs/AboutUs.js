import React from "react";
import {Heading,ActivitySubHeading} from '../masterCss'
import Button from '../button'

import styled from "styled-components";

const AboutText = styled.p`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
text-align: center;
`

function AboutUs() {
  return (
    <>
      <Heading>About Us</Heading>
      <AboutText>
        At Chatti we know that early talk matters. By inspiring parents to build
        the habit of high quality interactions with their under 5s we will
        ensure every child starts life with an equal chance of success.
      </AboutText>
      {/* playing image */}
      <ActivitySubHeading>Personalised learning</ActivitySubHeading>
      <p>
        Fits into your busy life so Chatti never feels like a chore. Starts with
        your child’s age and interests. Then grows with them.
      </p>
      {/* playing image */}
      <h4>Boost your child’s learning with Chatti</h4>
      <p>
        Our activities all help increase interactive talk so you and your child
        have fun while building critical skills to support school and life
        readiness.
      </p>
      {/* playing image */}
      <h4>Stay motivated with rewards</h4>
      <p>
        Celebrate the time together with your child and track progress so you
        can be confident you are giving them the brain boosting language
        goodness they need to thrive.
      </p>
    </>
  );
}

export default AboutUs;
