import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Button from "../button";
import styled from 'styled-components'
import {ReactComponent as SmileyFace} from '../../assets/svgs/smiley_face.svg'
import {GeneralText} from '../masterCss'




function Register4({ userData }) {
  return (
    <>
      {userData && (
        <>
          <Header />
          <h3>Great!</h3>
          <SmileyFace/>
          <GeneralText>
            Welcome {userData.userName} and {userData.childName}
            
          </GeneralText>


          <Link to="/login">
            <Button
              type="submit"
              type="button"
              buttonText="go to log in page"
            ></Button>
          </Link>
        </>
      )}
    </>
  );
}

export default Register4;
