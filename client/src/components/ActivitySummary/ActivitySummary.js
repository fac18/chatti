import React from 'react'
import Button from '../button'
import { ActivityTitle } from '../masterCss'
import * as SC from './ActivitySummary.style'
import { ReactComponent as TimeIcon } from '../../assets/svgs/activity_time.svg'
import { ReactComponent as AgesIcon } from '../../assets/svgs/activity_ages.svg'
import { ReactComponent as ListeningIcon } from '../../assets/svgs/activity_listening.svg'
import { ReactComponent as UnderstandingIcon } from '../../assets/svgs/activity_understanding.svg'
import { ReactComponent as SocialIcon } from '../../assets/svgs/activity_social.svg'
import { ReactComponent as SpeakingIcon } from '../../assets/svgs/activity_speaking.svg'
// import { Link } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router-dom'

function ActivitySummary({ activity, setCurrentActivity }) {
  //data is all the fields from the db:
  //id, title, video_url, image_url, instructions, duration, lower_age_range, upper_age_range, listening_attention, understanding, speaking, social_interaction
  const data = activity
  const history = useHistory()

  const openActivity = () => {
    setCurrentActivity(data)
    history.push('/activity')
  }

  return (
    <SC.ActivitySummary>
      <div className="top-container">
        <ActivityTitle>{data.title}</ActivityTitle>
        <p>**** 5.0</p>
      </div>
      <div className="centre-container">
        <div className="details-container">
          <div className="row-container">
            <TimeIcon />
            <p>{data.duration} mins</p>
          </div>
          <div className="row-container">
            <AgesIcon />
            <p>
              Ages {data.lower_age_range}-{data.upper_age_range}
            </p>
          </div>
          <div className="row-container">Skills</div>
          {data.listening_attention && (
            <div className="row-container">
              <ListeningIcon />
              <p>Listening/Attention</p>
            </div>
          )}
          {data.understanding && (
            <div className="row-container">
              <UnderstandingIcon />
              <p>Understanding</p>
            </div>
          )}
          {data.speaking && (
            <div className="row-container">
              <SpeakingIcon />
              <p>Speaking</p>
            </div>
          )}
          {data.social_interaction && (
            <div className="row-container">
              <SocialIcon />
              <p>Social Interaction</p>
            </div>
          )}
        </div>
        <img
          src={data.image_url}
          alt="activity preview"
          className="activity-preview"
        ></img>
      </div>
      <Button buttonText="Let's go" handleClick={openActivity} />
    </SC.ActivitySummary>
  )
}

export default ActivitySummary
