import React from "react";

function SelectedServices() {
  return (
    <div className="flex gap-6 my-4">
      {/* Where name will be */}
      <span>Kitchen</span>

      <div className="bg-neutral-400 px-3">
        <span className="mr-4 cursor-pointer">{"<"}</span>
        {/* Where the quantity will be shown */}
        <span>2</span>
        <span className="ml-4 cursor-pointer">{">"}</span>
      </div>
      <button className="bg-red-600 text-white px-2 rounded">Remove</button>
    </div>
  );
}

export default SelectedServices;
