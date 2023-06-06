import React from "react";
import laura from "./../../assets/laura.png";

function ServiceReviews() {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <img src={laura} alt="laura.png" />
        <div className="flex flex-col">
          {/* For reviewer name */}
          <h5 className="font-bold">Laura</h5>
          {/* For date of review */}
          <span>June 2023</span>
        </div>
      </div>

      {/* Review description */}
      <span className="flex mt-2">Best cleaning in the world</span>
    </div>
  );
}

export default ServiceReviews;
