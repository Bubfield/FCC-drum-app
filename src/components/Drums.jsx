import React from "react";
import Drum from "./Drum";

const Drums = ({ setDrumName, volume }) => {
  return (
    <div className="drum-container">
      <Drum
        drum="Q"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        setDrumName={setDrumName}
        nameOf="Heater 1"
        volume={volume}
      />
      <Drum
        drum="W"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        setDrumName={setDrumName}
        nameOf="Heater 2"
        volume={volume}
      />
      <Drum
        drum="E"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        setDrumName={setDrumName}
        nameOf="Heater 3"
        volume={volume}
      />
      <Drum
        drum="A"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        setDrumName={setDrumName}
        nameOf="Heater 4"
        volume={volume}
      />
      <Drum
        drum="S"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        setDrumName={setDrumName}
        nameOf="Clap"
        volume={volume}
      />
      <Drum
        drum="D"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        setDrumName={setDrumName}
        nameOf="Open HH"
        volume={volume}
      />
      <Drum
        drum="Z"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        setDrumName={setDrumName}
        nameOf="Kick n' Hat"
        volume={volume}
      />
      <Drum
        drum="X"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        setDrumName={setDrumName}
        nameOf="Kick"
        volume={volume}
      />
      <Drum
        drum="C"
        audioClip="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        setDrumName={setDrumName}
        nameOf="Closed HH"
        volume={volume}
      />
    </div>
  );
};

export default Drums;
