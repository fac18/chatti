import React from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom'
import Button from '../button'

function Register4() {
  //need to know userName and childName
  const userName = "Victoria";
  const childName = "Freddie";
  return (
    <>
      <Header />
      {/* progress graphic thing */}
      <h3>Great!</h3>
      {/* happy image */}
      <h3>Welcome USERNAME and CHILDNAME</h3>
      {/* Start using Chatti now button */}
      <Link to="/login">
      <Button type='submit' type="button" buttonText="go to log in page"></Button>
        </Link>
    </>
  );
}

export default Register4;
