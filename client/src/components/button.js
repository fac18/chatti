import React from "react";
import styled, { css } from "styled-components";


const GenericButton = styled.button `
background: #26E2E2;
box-shadow: 0px 4px 0px #1A9D9D;
width: 270px;
border-radius: 12px;
min-height: 40px;
font-family: Lato;
font-weight: normal;
font-size: 19px;
color: #0E2869;
text-align: center;
cursor: pointer;
border-style: none;
margin: 50px;

${props => {
    props.primary && 
    css `
    background:#FFC000
    box-shadow:0px 4px 0px #FF8E00;
    
    `
}}

`
const Button = props => {
    return (
      <GenericButton
      primary = {props.primary}
      >

      </GenericButton>
     
    );
  };
  



export default Button;