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
        <SC.SettingsHeader>{userData.userName}</SC.SettingsHeader>
        <ActivitySubHeading SettingsSub>Your profile settings:</ActivitySubHeading>
        <div>
         <SC.SettingText>
          <p>
            Your child's name
          </p>
          <p>{userData.childName}</p>
          </SC.SettingText>
          
          <SC.SettingText>
          <p>
            Your child's age
          </p>
          <p>5</p>
          </SC.SettingText>
          
          <SC.SettingText>
          <p>
            Your email address
          </p>

          <p>{userData.userEmail}</p>
          </SC.SettingText>


          
          
          
          
          
       
        </div>
        
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
         narrow
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
