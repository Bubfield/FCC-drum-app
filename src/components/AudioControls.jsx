import React from "react";

const AudioControls = ({ handleSwitch, drumName, volume, handleVolume }) => {
  return (
    <>
      <div className="audio-controls-container">
        <div className="power-div">
          <h3 className="power-h3">Power</h3>
          <div className="black-div">
            <div className="blue-div" onClick={handleSwitch}></div>
          </div>
        </div>
        <div className="drum-name" id="display">
          {drumName}
        </div>
        <div className="volume-slider">
          <input
            max="1"
            min="0"
            step="0.01"
            type="range"
            value={volume}
            onChange={handleVolume}
          />
        </div>
      </div>
    </>
  );
};

export default AudioControls;
