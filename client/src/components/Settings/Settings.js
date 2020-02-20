import React, { useReducer } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Button from "../button";
import getSettingData from '../../utils/getSettingsData';
import {useHistory,Link} from "react-router-dom";
import * as SC from './settings.style';
import {ActivitySubHeading} from '../masterCss'





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
        <ActivitySubHeading SettingsSub>Your profile settings:</ActivitySubHeading>
        <SC.TableWrapper>
        <table>
          <tbody>
            <tr>
              <SC.Row>Your child's name</SC.Row>
              <td>{userData.childName}</td>
              
            </tr>
            <tr>
              <SC.Row>Your child's age</SC.Row>
              <td>5</td>
              
            </tr>
            <tr>
              <SC.Row>Your email</SC.Row>
              <td>{userData.userEmail}</td>
              
            </tr>
            <tr>
              <SC.Row>Your password</SC.Row>
              <td>arsenal123</td>
              
            </tr>
          </tbody>
        </table>
        </SC.TableWrapper>
        
        <ActivitySubHeading SettingsSub>Your notifications and target:</ActivitySubHeading>
        <SC.SettingsLabel for="notificationsFrequency">Notification frequency</SC.SettingsLabel>
        <SC.Select id="notificationsFrequency">
          <option value="daily">Daily</option>
          </SC.Select>
        <SC.SettingsLabel for="notificationsTime">Notification time</SC.SettingsLabel>
        <SC.Select id="notificationsTime">
          <option value="20:00:00">8:00pm</option>
        </SC.Select>

        <SC.SettingsLabel for="weeklyGoal">Weekly goal</SC.SettingsLabel>
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
