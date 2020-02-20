import React from 'react'
import styled, { css } from 'styled-components'
import { Field, Form, ErrorMessage } from 'formik'

const InputField = styled(Field)`
  background-color: #00000;
  box-shadow: inset 0px 4px 0px rgba(22, 60, 155, 0.71);
  border: 1px solid #163c9b;
  width: 270px;
  border-radius: 12px;
  min-height: 40px;
  font-family: Lato;
  font-weight: normal;
  font-size: 19px;
  color: #0e2869;
  text-align: center;
  cursor: pointer;
  margin: 1rem auto;
`

const Heading = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  color: #ffffff;
  margin-top: 2rem;
  ${props =>
    props.whiteBg &&
    css`
      color: #163c9b;
    `}
`

const ActivityTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 27px;
  color: #163c9b;
  padding: 2em 0 1em 0em;
`

const ActivityContainer = styled.div`
  background-color: #f7f7f7;
  max-width: 1200px;
  margin: 1em auto 3em auto;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`

const Error = styled(ErrorMessage)`
  color: red;
  padding: 0 5em 2em 5em;
`

const GeneralText = styled.p`
  display: inline;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
`

const InputSubHeading = styled.label`
  display: flex;
  flex-direction: column;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`

const ActivitySubHeading = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-size: 32px;
  line-height: 19px;
  text-align: left;
  color: #163c9b;
  padding: 1em 0 1em 1em;
`

const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
`

const RecommendationParagraph = styled.p`
  font-size: 1.4em;
  text-align: center;
  color: white;
  padding: 2em;
  background-color: #3b60bd;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProgressContainer = styled.div`
  max-width: 1200px;
  margin: 1em auto 8em auto;

  h1 {
    color: #163c9b;
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 1em;
    font-weight: 400;
  }
  h3 {
    font-size: 2em;
    font-weight: 300;
  }
  h2 {
    font-size: 4em;
    font-weight: 200;
    color: #163c9b;
  }

  .flex-display {
    display: flex;
    align-self: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .space-around {
    justify-content: space-around;
    margin-top: 1em;
  }

  .progress-section {
    background-color: #f5f8fd;
    /* border: 1px solid #163c9b; */
    border-radius: 10px;
    padding: 1em 2em;
    margin-bottom: 5px;
    transition: 0.3s all ease-in-out;
  }
`

export {
  InputField,
  ActivityTitle,
  GeneralText,
  Heading,
  InputSubHeading,
  ActivitySubHeading,
  FormBox,
  Error,
  RecommendationParagraph,
  FormContainer,
  ActivityContainer,
  ProgressContainer,
}
