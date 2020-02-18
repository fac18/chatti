import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { ActivityTitle } from '../masterCss'
import Button from '../button'
import * as SC from './ActivityPage.style'
import { ReactComponent as TimeIcon } from '../../assets/svgs/activity_time.svg'
import { ReactComponent as AgesIcon } from '../../assets/svgs/activity_ages.svg'
import { ReactComponent as ListeningIcon } from '../../assets/svgs/activity_listening.svg'
import { ReactComponent as UnderstandingIcon } from '../../assets/svgs/activity_understanding.svg'
import { ReactComponent as SocialIcon } from '../../assets/svgs/activity_social.svg'
import { ReactComponent as SpeakingIcon } from '../../assets/svgs/activity_speaking.svg'
import VideoPopup from '../Popup/Popup'

//props are passed via a router Link so are stored within the location property
function ActivityPage({ location: { data } }) {
  return (
    <SC.ActivityPage>
      <Header buttons />
      <ActivityTitle>{data.title}</ActivityTitle>
      {/* activity rating */}
      <section className="summary-container">
        <img
          src={data.image_url}
          alt="activity preview"
          className="activity-preview"
        ></img>
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
          {data.social && (
            <div className="row-container">
              <SocialIcon />
              <p>Social Interaction</p>
            </div>
          )}
        </div>
      </section>
      <p className="activity-description">{data.description}</p>
      <VideoPopup />
      <Button buttonText="Add to Favourites" secondary />
      {/* add review button - IGNORE? */}
      {/* reviews component - IGNORE? */}
      <Navbar />
    </SC.ActivityPage>
  )
}

export default ActivityPage
