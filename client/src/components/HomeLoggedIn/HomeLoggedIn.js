import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { Heading, ActivitySubHeading } from "../masterCss";
import ActivitySummary from "../ActivitySummary/ActivitySummary";
import getUserLibrary from "../../utils/getUserLibrary";

const LoggedInActivity = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #163c9b;
`;

function HomeLoggedIn({ userData }) {
  const [userLibrary, setUserLibrary] = React.useState(null);

  React.useEffect(() => {
    if (userData) {
      getUserLibrary(userData.userEmail).then(result => setUserLibrary(result));
    }
  }, [userData]);

  console.log(userLibrary);

  return (
    <>
      <Header buttons />
      {userData && userLibrary && (
        <Heading whiteBg>Welcome {userData.userName}</Heading>
      )}
      <ActivitySubHeading>Your next activity:</ActivitySubHeading>
      {/* show the last activity in the array: is the most recent so should be last in array (??) */}
      {userData && userLibrary && (
        <ActivitySummary
          key={userLibrary[userLibrary.length - 1].id}
          data={userLibrary[userLibrary.length - 1]}
        />
      )}
      <ActivitySubHeading>More activities:</ActivitySubHeading>
      {/* ?? collapsible lists with activity summaries inside ?? */}
      {userData &&
        userLibrary &&
        userLibrary
          .slice(0, -1)
          .map(activity => (
            <ActivitySummary key={activity.id} data={activity} />
          ))}

      <Navbar />
    </>
  );
}

export default HomeLoggedIn;
