import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { Heading, ActivitySubHeading } from "../masterCss";
import ActivitySummary from "../ActivitySummary/ActivitySummary";

const LoggedInActivity = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #163c9b;
`;

function HomeLoggedIn({ userData }) {
  return (
    userData && (
      <>
        <Header />
        <Heading whiteBg>Welcome {userData.userName}</Heading>
        <ActivitySubHeading>Your next activity:</ActivitySubHeading>
        <ActivitySummary />
        {/* activity summary component */}
        <ActivitySubHeading>More activities:</ActivitySubHeading>
        {/* ?? collapsible lists with activity summaries inside ?? */}

        <Navbar />
      </>
    )
  );
}

export default HomeLoggedIn;
