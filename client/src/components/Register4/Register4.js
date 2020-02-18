import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Button from "../button";
import styled from 'styled-components'
import {ReactComponent as SmileyFace} from '../../assets/svgs/smiley_face.svg'




function Register4({ userData }) {
  return (
    <>
      {userData && (
        <>
          <Header />
          <h3>Great!</h3>
          <SmileyFace/>
          <h3>
            Welcome {userData.userName} and {userData.childName}
          </h3>
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
