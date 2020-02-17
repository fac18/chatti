import React, {Component} from 'react';
import ReactPlayer from 'react-player';


export default function Player() {
  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=AjrtRgZdzgU' playing />
    </div>
  );
};
