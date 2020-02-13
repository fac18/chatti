import React from "react";
import Button from "../button";
import { ActivityTitle } from "../masterCss";
import * as SC from "./ActivitySummary.style";
import { ReactComponent as TimeIcon } from "../../assets/svgs/activity_time.svg";
import { ReactComponent as AgesIcon } from "../../assets/svgs/activity_ages.svg";
import { ReactComponent as ListeningIcon } from "../../assets/svgs/activity_listening.svg";
import { ReactComponent as UnderstandingIcon } from "../../assets/svgs/activity_understanding.svg";
import { Link } from "react-router-dom";

function ActivitySummary() {
  //need to know the activity details

  return (
    <SC.ActivitySummary>
      <div className="top-container">
        <ActivityTitle>Claparoo</ActivityTitle>
        <p>**** 5.0</p>
      </div>
      <div className="centre-container">
        <div className="details-container">
          <div className="row-container">
            <TimeIcon />
            <p>10 mins</p>
          </div>
          <div className="row-container">
            <AgesIcon />
            <p>Ages 3-5</p>
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
        <img
          src="https://cdn.cdnparenting.com/articles/2018/07/1097354639-H.jpg"
          alt="activity preview image"
          className="activity-preview"
        ></img>
      </div>
      <Link to="activity">
        <Button buttonText="Let's go" />
      </Link>
    </SC.ActivitySummary>
  );
}

export default ActivitySummary;
