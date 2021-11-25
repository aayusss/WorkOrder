import React from "react";
import "../PopUp/PopUp.css";

const PopUp = (props) => {
  return (
    <div className="popup-box">
      <div className="box">{props.content}</div>
    </div>
  );
};

export default PopUp;
