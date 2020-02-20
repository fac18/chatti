import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Favourite from '../Favourite/Favourite'
import { Heading } from '../masterCss'
import { FavsContainer } from './favouritesconainer.styles'

function FavouritesContainer({ favouriteActivities, setCurrentActivity }) {
  //need to know list of user favourites
  //and add message if they have no favourites!

  return (
    <>
      {favouriteActivities && (
        <>
          <Header buttons />
          <Heading whiteBg>Your Favourites</Heading>
          <FavsContainer>
            {favouriteActivities.map(activity => {
              return (
                <Favourite
                  key={activity.id}
                  activity={activity}
                  setCurrentActivity={setCurrentActivity}
                />
              )
            })}
            </FavsContainer>
          <Navbar />
        </>
      )}
    </>
  )
}

export default FavouritesContainer
