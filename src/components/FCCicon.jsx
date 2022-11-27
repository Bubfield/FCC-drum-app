import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const FCCicon = () => {
  return (
    <div className="fa-icon-container">
      {"FCC "}
      <FontAwesomeIcon icon={faFreeCodeCamp} className="fa-icon" />
    </div>
  );
};

export default FCCicon;
