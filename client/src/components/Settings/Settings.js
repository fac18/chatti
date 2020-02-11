import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function Settings() {
  //need to know userName, email, childs name, childs age, password length

  return (
    <>
      <Header />
      <h2>${userName}</h2>
      <h3>Your profile settings:</h3>
      <table>
        <tbody>
          <tr>
            <td>Your child's name</td>
            <td>{childsName}</td>
            <td>{/* edit icon */}</td>
          </tr>
          <tr>
            <td>Your child's age</td>
            <td>{childsAge}</td>
            <td>{/* edit icon */}</td>
          </tr>
          <tr>
            <td>Your email</td>
            <td>{userEmail}</td>
            <td>{/* edit icon */}</td>
          </tr>
          <tr>
            <td>Your password</td>
            <td>{/* password length in *s? */}</td>
            <td>{/* edit icon */}</td>
          </tr>
        </tbody>
      </table>
      <h3>Your notifications and target:</h3>
      <label for="notificationsFrequency">Notification frequency</label>
      <select id="notificationsFrequency">
        <option value="daily">Daily</option>
      </select>

      <label for="notificationsTime">Notification time</label>
      <select id="notificationsTime">
        <option value="20:00:00">8:00pm</option>
      </select>

      <label for="weeklyGoal">Weekly goal</label>
      <select id="weeklyGoal">
        <option value="70">70 minutes</option>
      </select>
      {/* Logout button */}
      <Navbar />
    </>
  );
}

export default Settings;