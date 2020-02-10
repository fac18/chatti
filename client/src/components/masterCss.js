import styled from "styled-components";

const Button = styled.button `
background: #FFC000;
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

const WhiteText = styled.p`
  color: #FFFFFF
  display: inline;
`;

export {
Button,
WhiteText


}