import React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/delete_icon.svg";
import * as SC from "./Favourite.style";
import Button from "../button";

function Favourite() {
  return (
    <SC.Favourite>
      <img
        className="activity-preview"
        src="https://cdn.cdnparenting.com/articles/2018/07/1097354639-H.jpg"
        alt="activity preview image"
      ></img>
      <div className="right-container">
        <div className="top-container">
          <h3>Claparoo</h3>
          <DeleteIcon />
        </div>
        <Button narrow buttonText="Play again" />
      </div>
    </SC.Favourite>
  );
}

export default Favourite;
