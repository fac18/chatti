import styled from 'styled-components'

const VideoButton = styled.button`
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
`

export default VideoButton
