import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import PlayerContainer from './player.style';


export default function Player() {
  return (
    <div className="player_container">
      <ReactPlayer className="video-player" width='100%' height='auto' url='https://www.youtube.com/watch?v=AjrtRgZdzgU' playing />
    </div>
  );
};
