import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Button from '../button'
import styled from 'styled-components'
import {ReactComponent as SmileyFace} from '../../assets/svgs/smiley_face.svg'
import {GeneralText,Heading} from '../masterCss'
import * as SC from "./Register.style";


function Register4({ names }) {
  return (
    <>
      {names && (
        <>
          <Heading reg4>Great!</Heading>
          
          <SC.SvgContainer>
          <SmileyFace/>
          <GeneralText>
            Welcome {names.userName} and {names.childName}
          </GeneralText>
          </SC.SvgContainer>

          <Link to="/login">
            <Button
              bottom
              type="submit"
              type="button"
              buttonText="Log into your profile"
            ></Button>
          </Link>
        </>
      )}
    </>
  )
}

export default Register4
