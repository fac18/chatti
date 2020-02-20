import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import { CommunityContainer } from '../masterCss'
import {
  InputField,

  InputSubHeading,
  FormBox,
  Error,
} from '../masterCss'
import { ErrorMessage, Formik } from 'formik'
import Button from '../button'


function Community({ userData, userLibrary }) {

  return (
    <>
          <Header buttons />
          <CommunityContainer>
            <h1>Visit us soon!</h1>
            <p>Soon we will launch here the Chatti forum</p>
          </CommunityContainer>
         
 
          <Navbar />
    </>
  )
}

export default Community
