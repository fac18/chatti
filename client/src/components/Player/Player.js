import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import PlayerContainer from './player.style'

export default function Player({ videoUrl }) {
  return (
    <PlayerContainer>
      {/* <div className="player_container"> */}
      <ReactPlayer
        className="video-player"
        width="100%"
        height="auto"
        url={videoUrl}
        playing
        controls
      />
      {/* </div> */}
    </PlayerContainer>
  )
}
