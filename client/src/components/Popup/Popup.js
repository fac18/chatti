import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import Player from '../Player/Player'
import PopupVideo from './popup.style'
import VideoButton from './popupbutton.style'
import '../masterCss'

export default function VideoPopup({ videoUrl }) {
  return (
    <Popup
      trigger={<VideoButton>Watch video</VideoButton>}
      contentStyle={{ width: '600px', height: '400px' }}
      modal
    >
      {close => (
        <PopupVideo
          trigger={<button className="button"> Trigger </button>}
          position="top center"
          closeOnDocumentClick
        >
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="content">
              <Player videoUrl={videoUrl} />
            </div>
            <div className="actions"></div>
          </div>
        </PopupVideo>
      )}
    </Popup>
  )
}
