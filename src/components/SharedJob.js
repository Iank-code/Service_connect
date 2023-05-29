import React from "react";

function SharedJob({ pic, text }) {
  return (
    <div className="flex flex-col items-center gap-4 mobile:text-sm">
      <img src={pic} alt={pic} className="w-10 h-10" />
      <span>{text}</span>
    </div>
  );
}

export default SharedJob;
