import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import Player from '../Player/Player';
import PopupVideo from './popup.style';
import '../masterCss';



export default function VideoPopup() {
  return (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          <Player/>
        </div>
        <div className="actions">
          <PopupVideo
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            
          </PopupVideo>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
          </button>
        </div>
      </div>
    )}
  </Popup>
  )
}
