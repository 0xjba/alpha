import React, { useState } from 'react';
import './Tinder.css';

function Tinder() {
  const [muted, setMuted] = useState(true);
  return (
    <div className="card-container">
      <div className="card">
        <video className="video-container" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted={muted} onClick={() => setMuted(!muted)}></video> 
      </div>
    </div>
  );
}

export default Tinder;
