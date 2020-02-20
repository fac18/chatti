import React from 'react'
import * as SC from './Favourite.style'
import Button from '../button'
import { useHistory } from 'react-router-dom'

function Favourite({ activity, setCurrentActivity }) {
  const data = activity
  const history = useHistory()

  const openActivity = () => {
    setCurrentActivity(data)
    history.push('/activity')
  }
  return (
    <SC.Favourite>
      <div className="activity-preview-container">
        <img
          className="activity-preview"
          src={activity.image_url}
          alt="activity preview image"
        ></img>
      </div>
      <div className="right-container">
        <div className="top-container">
          <h3>{activity.title}</h3>
        </div>
        <Button narrow buttonText="Play again" handleClick={openActivity} />
      </div>
    </SC.Favourite>
  )
}

export default Favourite
