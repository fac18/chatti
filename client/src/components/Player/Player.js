import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PlayerContainer from './player.style'

export default function Player({ videoUrl }) {
  return (
    // <div className="player_wrapper">
    <PlayerContainer>
      {/* <div className="player_container"> */}
      <ReactPlayer
        className="player"
        url={videoUrl}
        width="100%"
        height="100%"
        playing
        controls
      />
      {/* </div> */}
    </PlayerContainer>
    // </div>
  )
}
