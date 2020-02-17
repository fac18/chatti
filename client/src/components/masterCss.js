import React from "react";
import styled, { css } from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

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
`;

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
`;

const ActivityTitle = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #163c9b;
  padding: 1rem;
`;

const Error = styled(ErrorMessage)`
  color: red;
  padding: 0 5em 2em 5em;
`;

const GeneralText = styled.p`
display: inline;
font-family: font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 29px;
text-align: center;
color: #FFFFFF;
`;

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
`;

const ActivitySubHeading = styled.h4`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  color: #163c9b;
  padding: 1rem;
`;

const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;

`;

const RecommendationParagraph = styled.p`
  font-size: 1.4em;
  text-align: center;
  color: white;
  padding: 2em;
  background-color: #3B60BD;
`;

const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
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
  

};
