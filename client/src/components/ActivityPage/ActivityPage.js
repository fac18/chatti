import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { ActivityTitle } from "../masterCss";
import Button from "../button";
import * as SC from "./ActivityPage.style";
import { ReactComponent as TimeIcon } from "../../assets/svgs/activity_time.svg";
import { ReactComponent as AgesIcon } from "../../assets/svgs/activity_ages.svg";
import { ReactComponent as ListeningIcon } from "../../assets/svgs/activity_listening.svg";
import { ReactComponent as UnderstandingIcon } from "../../assets/svgs/activity_understanding.svg";
import VideoPopup from "../Popup/Popup";

//props are passed via a router Link so are stored within the location property
function ActivityPage({ location: { data } }) {
  return (
      <SC.ActivityPage>
        <Header buttons />
        <ActivityTitle>Claparoo</ActivityTitle>
        {/* activity rating */}
        <section className="summary-container">
          
          <div className="details-container">
            <div className="row-container">
              <TimeIcon />
              <p>12 mins</p>
            </div>
            <div className="row-container">
              {" "}
              <AgesIcon />
              <p>
                Ages from 3 to 5
              </p>
            </div>
            <div className="row-container">Skills</div>
            
              <div className="row-container">
                <ListeningIcon />
                <p>Listening/Attention</p>
              </div>
            
            
              <div className="row-container">
                <UnderstandingIcon />
                <p>Understanding</p>
              </div>
            
          </div>
        </section>
        <p className="activity-description">clap your hands together</p>
        <VideoPopup/>
        <Button buttonText="Add to Favourites" secondary />
        {/* add review button - IGNORE? */}
        {/* reviews component - IGNORE? */}
        <Navbar />
      </SC.ActivityPage>
    
  );
}

export default ActivityPage;
