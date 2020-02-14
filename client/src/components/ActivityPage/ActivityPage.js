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

function ActivityPage({ userData }) {
  //need to know the activity details

  return (
    <SC.ActivityPage>
      <Header buttons="true" />
      <ActivityTitle>Claparoo</ActivityTitle>
      {/* activity rating */}
      <section className="summary-container">
        <img
          className="activity-preview"
          src="https://cdn.cdnparenting.com/articles/2018/07/1097354639-H.jpg"
          alt="activity preview image"
        ></img>
        <div className="details-container">
          <div className="row-container">
            <TimeIcon />
            <p>10 mins</p>
          </div>
          <div className="row-container">
            {" "}
            <AgesIcon />
            <p>Ages 3-5</p>
          </div>
          <div className="row-container">Skills</div>
        </div>
      </section>
      {/* activity duration */}
      {/* activity age range */}
      {/* activity skills */}
      <p className="activity-description">
        Sit down so you are on the same level as {userData.childName}. Clap your
        hands together and encourage him to do the same. Reach forward and clap
        your hands against Freddie’s. Clap your hands together again, and
        repeat! For an extra challenge, try counting numbers or saying the
        alphabet at the same time
      </p>

      {/* watch video button */}
      <Button buttonText="Watch Video" />
      <Button buttonText="Add to Favourites" secondary />
      {/* add review button - IGNORE? */}
      {/* reviews component - IGNORE? */}
      <Navbar />
    </SC.ActivityPage>
  );
}

export default ActivityPage;
