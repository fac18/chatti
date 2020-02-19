import React, { useReducer } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Button from "../button";
import getSettingData from '../../utils/getSettingsData';
import {useHistory,Link} from "react-router-dom";
import * as SC from './settings.style';
import {InputSubHeading} from '../masterCss'



function Settings({ userData }) {
  //need to know userName, email, childs name, childs age, password length
  const history = useHistory();
  
  const logout = () => {
    getSettingData(userData).then(result =>{
      if(result === "cookie deleted"){
        console.log(result)
        history.push('./login')
      }
     }).catch(console.log)
  }



  return (
    userData && (
      <React.Fragment>
       <SC.Setting>
        <Header buttons />
        <h2>{userData.userName}</h2>
        <h3>Your profile settings:</h3>
        <table>
          <tbody>
            <tr>
              <td>Your child's name</td>
              <td>{userData.childName}</td>
              <td>{/* edit icon */}</td>
            </tr>
            <tr>
              <td>Your child's age</td>
              <td>5</td>
              <td>{/* edit icon */}</td>
            </tr>
            <tr>
              <td>Your email</td>
              <td>{userData.userEmail}</td>
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
        <SC.Select id="notificationsFrequency">
          <option value="daily">Daily</option>
          </SC.Select>
        <label for="notificationsTime">Notification time</label>
        <SC.Select id="notificationsTime">
          <option value="20:00:00">8:00pm</option>
        </SC.Select>

        <label for="weeklyGoal">Weekly goal</label>
        <SC.Select id="weeklyGoal">
          <option value="70">70 minutes</option>
        </SC.Select>
        
        <Button
         handleClick = {logout}
         buttonText = {'Logout'}
        >
        log out
        
        </Button> 
        
        <Navbar />
        </SC.Setting>
      </React.Fragment>
    )
  );
}

export default Settings;
