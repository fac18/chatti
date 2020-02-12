import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const LoggedInActivity = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #163c9b;
`;

function HomeLoggedIn({ username }) {
  //need to know userName and their activities
  const userName = "Ayub";

  return (
    <>
      <Header />
      <h1>Welcome {username}</h1>
      <h4>Your next activity:</h4>
      {/* activity summary component */}
      <h4>More activities:</h4>
      {/* ?? collapsible lists with activity summaries inside ?? */}

      <Navbar />
    </>
  );
}

export default HomeLoggedIn;
