import React from "react";
import styled, { css } from "styled-components";

const GenericButton = styled.button`
  background: #ffc000;
  box-shadow: 0px 4px 0px #ff8e00;
  width: 270px;
  border-radius: 12px;
  min-height: 40px;
  font-family: Lato;
  font-weight: normal;
  font-size: 19px;
  color: #000000;
  text-align: center;
  cursor: pointer;
  border-style: none;
  margin: 1rem auto;

  ${props =>
    props.secondary &&
    css`
      background: #26e2e2;
      box-shadow: 0px 4px 0px #1a9d9d;
    `}
  ${props =>
    props.bottom &&
    css`
      position: fixed;
      bottom: 2rem;
      left: 50%;
      margin-left: -135px;
    `}
      ${props =>
        props.narrow &&
        css`
          width: 144px;
        `}
`;

const Button = props => {
  return (
    <GenericButton
      secondary={props.secondary}
      bottom={props.bottom}
      narrow={props.narrow}
    >
      {props.buttonText}
    </GenericButton>
  );
};

export default Button;
