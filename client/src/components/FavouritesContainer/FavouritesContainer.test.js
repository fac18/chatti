import React from 'react'
import { render } from '@testing-library/react'
import FavouritesContainer from './FavouritesContainer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('Favourites Container includes Your Favourites header', () => {
  const history = createMemoryHistory()

  const favouriteActivities = [
    {
      id: 1,
      title: 'Clapperoo',
      video_url: 'https://www.youtube.com/embed/62QEl385HBQ',
      image_url: '/images/clapperoo.jpg',
      instructions:
        'Sit down so you are on the same level as (name). Clap your hands together and encourage (objectpronoun) to do the same.  Reach forward and clap your hands against (name)’s. Clap your hands together again, and repeat! For an extra challenge, try counting numbers or saying the alphabet at the same time',
      duration: 10,
      lower_age_range: 3,
      upper_age_range: 5,
      listening_attention: true,
      understanding: false,
      speaking: false,
      social_interaction: true,
    },
  ]

  const { getByText } = render(
    <Router history={history}>
      <FavouritesContainer favouriteActivities={favouriteActivities} />
    </Router>
  )
  const headerElement = getByText(/Your Favourites/i)
  expect(headerElement).toBeInTheDocument()
})
