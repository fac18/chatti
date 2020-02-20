import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import calcProgressStats from '../../utils/calcProgressStats'
import { ProgressContainer } from '../masterCss'
import { ReactComponent as BadgeStreak } from "../../assets/svgs/badge_streak.svg";
import { ReactComponent as LevelOne } from "../../assets/svgs/level_one_icon.svg";

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
              <span className="flex-display space-between">
                <h2>{progressStats.minutesCompleted} minutes</h2> <LevelOne/>
              </span>
            </div>
            <div className="progress-section">
              <h3>Activities completed:</h3>
              <h2>{progressStats.activitiesCompleted}</h2>
            </div>
            <div className="progress-section">
              <h3>Your badges:</h3>
              <div className="flex-display space-around">
                <BadgeStreak/>
                <LevelOne/>
              </div>
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
