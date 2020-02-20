import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Button from "../button";
import styled from 'styled-components'
import {ReactComponent as SmileyFace} from '../../assets/svgs/smiley_face.svg'
import {GeneralText,Heading} from '../masterCss'
import * as SC from "./Register.style";




function Register4({ userData }) {
  return (
    <>
      {userData && (
        <>
          
          <Heading reg4>Great!</Heading>
          
          <SC.SvgContainer>
          <SmileyFace/>
         
          
          
          <GeneralText>
            Welcome {userData.userName} and {userData.childName}
            
          </GeneralText>
          </SC.SvgContainer>


          <Link to="/login">
            <Button
              bottom
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
