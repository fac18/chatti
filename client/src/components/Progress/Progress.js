import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import calcProgressStats from '../../utils/calcProgressStats'
import { ProgressContainer } from '../masterCss'


function Progress({ userData, userLibrary }) {
  const [progressStats, setProgressStats] = React.useState(null)

  React.useEffect(() => {
    if (userLibrary) {
      setProgressStats(calcProgressStats(userLibrary))
    }
  }, [userLibrary])

  return (
    <>
      {progressStats && (
        <>
          <Header buttons />
          <ProgressContainer>
                      
            <h1>Your Progress</h1>
            <div className="progress-section">
              <h3>Total Chatti time:</h3>
              <h2>{progressStats.minutesCompleted}</h2>
            </div>
            <div className="progress-section">
              <h3>Activities completed:</h3>
              <h2>{progressStats.activitiesCompleted}</h2>
            </div>
            <div className="progress-section">
              <h3>Your badges:</h3>
            </div>

          </ProgressContainer>
          {/* badges here */}
          <Navbar />
        </>
      )}
    </>
  )
}

export default Progress
