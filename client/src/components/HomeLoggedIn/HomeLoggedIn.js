import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function HomeLoggedIn() {
  //need to know userName and their activities

  return (
    <>
      <Header />
      <h1>Welcome ${userName}</h1>
      <h4>Your next activity:</h4>
      {/* activity summary component */}
      <h4>More activities:</h4>
      {/* ?? collapsible lists with activity summaries inside ?? */}

      <Navbar />
    </>
  );
}

export default HomeLoggedIn;
