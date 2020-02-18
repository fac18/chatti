import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Progress({ userData }) {
  //need to know how many minutes totalled and number of activities (util)

  return (
    <>
      <Header buttons />
      <h1>Your Progress</h1>
      <h3>Total Chatti time:</h3>
      <h2>{/* total completed activities time */}</h2>
      <h3>Activities completed:</h3>
      <h2>{/* count of completed activities */}</h2>
      <h3>Your badges:</h3>
      {/* badges here */}
      <Navbar />
    </>
  )
}

export default Progress
