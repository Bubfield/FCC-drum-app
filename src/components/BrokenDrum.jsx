import React from "react";

const BrokenDrum = ({ drum, nameOf }) => {
  const handleClick = (e) => {
    const buttonStyles = e.target.style;
    buttonStyles.height = "77px";
    buttonStyles.marginTop = "8px";
    buttonStyles.boxShadow = "none";
    setTimeout(() => {
      buttonStyles.backgroundColor = "grey";
      buttonStyles.height = "80px";
      buttonStyles.marginTop = "5px";
      buttonStyles.boxShadow = "black 3px 3px 5px";
    }, 100);
  };

  return (
    <div className="drum-pad" onClick={handleClick} id={nameOf}>
      {drum}
    </div>
  );
};

export default BrokenDrum;
