import React from "react";
import BrokenDrum from "./BrokenDrum";

const BrokenDrums = () => {
  return (
    <div className="drum-container">
      <BrokenDrum drum="Q" nameOf="Heater 1" />
      <BrokenDrum drum="W" nameOf="Heater 2" />
      <BrokenDrum drum="E" nameOf="Heater 3" />
      <BrokenDrum drum="A" nameOf="Heater 4" />
      <BrokenDrum drum="S" nameOf="Clap" />
      <BrokenDrum drum="D" nameOf="Open HH" />
      <BrokenDrum drum="Z" nameOf="Kick n' Hat" />
      <BrokenDrum drum="X" nameOf="Kick" />
      <BrokenDrum drum="C" nameOf="Closed HH" />
    </div>
  );
};

export default BrokenDrums;
