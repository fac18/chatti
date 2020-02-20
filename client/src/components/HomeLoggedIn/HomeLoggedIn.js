import React, { useDebugValue } from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import { Heading, ActivitySubHeading, ActivityContainer } from '../masterCss'
import ActivitySummary from '../ActivitySummary/ActivitySummary'

const LoggedInActivity = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #163c9b;
`

function HomeLoggedIn({ userData, userLibrary, setCurrentActivity }) {
  return (
    <>
      {userLibrary && (
        <>
          <Header buttons />

          <Heading whiteBg>Welcome {userData.userName}</Heading>
          <ActivityContainer>
            <ActivitySubHeading>Your next activity:</ActivitySubHeading>
            {/* show the last activity in the array: is the most recent so should be last in array (??) */}

          <ActivitySummary
            key={userLibrary[userLibrary.length - 1].id}
            activity={userLibrary[userLibrary.length - 1]}
            setCurrentActivity={setCurrentActivity}
          />

        

            <ActivitySubHeading>More activities:</ActivitySubHeading>
            {/* ?? collapsible lists with activity summaries inside ?? */}

            {userLibrary.slice(0, -1).map(activity => (
              <ActivitySummary
                key={activity.id}
                activity={activity}
                setCurrentActivity={setCurrentActivity}
              />
            ))}
          </ActivityContainer>    
          <Navbar />
        </>
      )}
    </>
  )
}

export default HomeLoggedIn
