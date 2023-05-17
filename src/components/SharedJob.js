import React from "react";

function SharedJob({ pic, text }) {
  return (
    <div>
      <img src={pic} alt={pic} className="w-10 h-10"/>
      <span>{text}</span>
    </div>
  );
}

export default SharedJob;
