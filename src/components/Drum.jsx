import React from "react";

const Drum = ({ drum, audioClip, setDrumName, nameOf, volume }) => {
  const play = (e) => {
    const audio = e.target.firstChild;
    audio.volume = volume;
    audio.play();
    setDrumName(nameOf);
    const buttonStyles = e.target.style;
    buttonStyles.backgroundColor = "orange";
    buttonStyles.height = "77px";
    buttonStyles.marginTop = "8px";
    buttonStyles.boxShadow = "orange 3px 3px 5px";
    setTimeout(() => {
      buttonStyles.backgroundColor = "grey";
      buttonStyles.height = "80px";
      buttonStyles.marginTop = "5px";
      buttonStyles.boxShadow = "black 3px 3px 5px";
    }, 100);
  };

  const handleClick = (e) => {
    play(e);
  };

  return (
    <div className="drum-pad" onClick={handleClick} id={nameOf}>
      <audio className="clip" id={drum} src={audioClip}></audio>
      {drum}
    </div>
  );
};

export default Drum;
