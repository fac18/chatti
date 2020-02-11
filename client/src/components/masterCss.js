import React from 'react'
import styled,{css} from "styled-components";



const InputField = styled.input `
background: #FFFFF;
box-shadow: 3px 6px 2px rgba(0, 0, 0, 0.25), inset -10px -10px 4px #FF8E00,
inset 10px 10px 4px #FFC00;
width: 270px;
border-radius: 15px;
min-height: 40px;
font-family: Lato;
font-weight: normal;
font-size: 19px;
color: #0E2869;
text-align: center;
cursor: pointer;
border-style: none;
margin: 50px;
`

const Heading = styled.h1 `
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 29px;
line-height: 39px;
text-align: center;
color: #163C9B;
`

const ActivityTitle = styled.h2 `
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 27px;
color: #FFFFF;
`

const GeneralText = styled.p`
display: inline;
font-family: font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 29px;
text-align: center;
color: #FFFFFF;
`


const InputSubHeading = styled.h4 `
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFF;
padding: 20px;
`

const ActivitySubHeading = styled.h4 `
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 19px;
text-align: center;
color: #163C9B;
padding: 20px;
`

 


export {
InputField,
ActivityTitle,
GeneralText,
Heading,
InputSubHeading,
ActivitySubHeading,
}