import styled from "styled-components";



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

const Heading = styled.h2 `
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 29px;
line-height: 39px;
text-align: center;
color: #163C9B;
`

const SubHeading = styled.h4 `
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



export {
InputField,
SubHeading,
GeneralText,
Heading
}