import React from 'react'
import styled, { css } from 'styled-components'

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
  opacity: 85%;
  transition: 0.3s all ease-in-out;

  &:hover {
    opacity: 100%;
  }

  &:active {
    box-shadow: none;
  }
  

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
      bottom: 8rem;
      left: 50%;
      margin-left: -135px;
    `}
      ${props =>
        props.narrow &&
        css`
          width: 144px;
        `}
`

const Button = props => {
  return (
    <GenericButton
      secondary={props.secondary}
      bottom={props.bottom}
      narrow={props.narrow}
      onClick={() => {
        return props.handleClick ? props.handleClick() : null
      }}
    >
      {props.buttonText}
    </GenericButton>
  )
}

export default Button
