import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import calcProgressStats from '../../utils/calcProgressStats'

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
          <h1>Your Progress</h1>
          <h3>Total Chatti time:</h3>
          <h2>{progressStats.minutesCompleted}</h2>
          <h3>Activities completed:</h3>
          <h2>{progressStats.activitiesCompleted}</h2>
          <h3>Your badges:</h3>
          {/* badges here */}
          <Navbar />
        </>
      )}
    </>
  )
}

export default Progress
