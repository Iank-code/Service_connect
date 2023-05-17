import React from "react";
import checkMark from "./../assets/checkMark.png";

function SharedInfo({main, sub}) {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <img src={checkMark} alt="checkMark.png" className="w-6 h-6" />
        <h3 className="text-xl font-bold">{main}</h3>
      </div>
      <span className="text-base text-gray-800">{sub}</span>
    </div>
  );
}

export default SharedInfo;
