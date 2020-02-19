import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/delete_icon.svg";
import * as SC from "./Favourite.style";
import Button from "../button";



function Favourite({activity}) {
  return (
    <SC.Favourite>
      <img
        className="activity-preview"
        src= {activity.image_url}
        alt="activity preview image"
      ></img>
      <div className="right-container">
        <div className="top-container">
          <h3>{activity.title}</h3>
          <DeleteIcon />
        </div>
        <Button narrow buttonText="Play again" />
      </div>
    </SC.Favourite>
  );
}

export default Favourite;
