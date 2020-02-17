import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import Button from '../button.js';
import Player from '../Player/Player'




export default function VideoPopup() {
  return (
    <div>
    <Popup trigger={<button> Trigger </button>} position="right center">
    <div>
    
    <p>Our video</p>
      <Player/>
    </div>
  </Popup>
    </div>
  )
}
