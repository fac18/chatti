import React from "react";
import Header from "../Header/Header";

function Register3() {
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <h3>
        We recommend that you aim for 10 minutes of chatti activity everyday
      </h3>
      {/* accept recommended settings button */}
      {/* video and caption */}
      {/* scroll down arrow */}

      <label for="notificationsFrequency">
        How often do you want to get new ideas?
      </label>
      <select id="notificationsFrequency">
        <option value="daily">Daily</option>
      </select>

      <label for="notificationsTime">
        What time do you want to get new ideas at?
      </label>
      <select id="notificationsTime">
        <option value="20:00:00">8:00pm</option>
      </select>

      <label for="weeklyGoal">Your weekly goal:</label>
      <select id="weeklyGoal">
        <option value="70">70 minutes</option>
      </select>
      <h4>You can change this at any time in your settings.</h4>
      {/* continue button */}
    </>
  );
}

export default Register3;
