import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Favourite from '../Favourite/Favourite'
import { Heading } from '../masterCss'

function FavouritesContainer({ favouriteActivities, setCurrentActivity }) {
  //need to know list of user favourites
  //and add message if they have no favourites!

  return (
    <>
      {favouriteActivities && (
        <>
          <Header buttons />
          <Heading whiteBg>Your Favourites</Heading>
          {favouriteActivities.map(activity => {
            return (
              <Favourite
                key={activity.id}
                activity={activity}
                setCurrentActivity={setCurrentActivity}
              />
            )
          })}
          <Navbar />
        </>
      )}
    </>
  )
}

export default FavouritesContainer
